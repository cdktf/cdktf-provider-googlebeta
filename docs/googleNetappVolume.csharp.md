# `googleNetappVolume` Submodule <a name="`googleNetappVolume` Submodule" id="@cdktf/provider-google-beta.googleNetappVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetappVolume <a name="GoogleNetappVolume" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume google_netapp_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolume(Construct Scope, string Id, GoogleNetappVolumeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig">GoogleNetappVolumeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig">GoogleNetappVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putBackupConfig">PutBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putExportPolicy">PutExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putRestoreParameters">PutRestoreParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putSnapshotPolicy">PutSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTieringPolicy">PutTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetBackupConfig">ResetBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetExportPolicy">ResetExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetKerberosEnabled">ResetKerberosEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetLargeCapacity">ResetLargeCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetMultipleEndpoints">ResetMultipleEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetRestoreParameters">ResetRestoreParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetRestrictedActions">ResetRestrictedActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSecurityStyle">ResetSecurityStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSmbSettings">ResetSmbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSnapshotDirectory">ResetSnapshotDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSnapshotPolicy">ResetSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetTieringPolicy">ResetTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetUnixPermissions">ResetUnixPermissions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupConfig` <a name="PutBackupConfig" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putBackupConfig"></a>

```csharp
private void PutBackupConfig(GoogleNetappVolumeBackupConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putBackupConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a>

---

##### `PutExportPolicy` <a name="PutExportPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putExportPolicy"></a>

```csharp
private void PutExportPolicy(GoogleNetappVolumeExportPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putExportPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a>

---

##### `PutRestoreParameters` <a name="PutRestoreParameters" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putRestoreParameters"></a>

```csharp
private void PutRestoreParameters(GoogleNetappVolumeRestoreParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putRestoreParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a>

---

##### `PutSnapshotPolicy` <a name="PutSnapshotPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putSnapshotPolicy"></a>

```csharp
private void PutSnapshotPolicy(GoogleNetappVolumeSnapshotPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putSnapshotPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a>

---

##### `PutTieringPolicy` <a name="PutTieringPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTieringPolicy"></a>

```csharp
private void PutTieringPolicy(GoogleNetappVolumeTieringPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTieringPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetappVolumeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts">GoogleNetappVolumeTimeouts</a>

---

##### `ResetBackupConfig` <a name="ResetBackupConfig" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetBackupConfig"></a>

```csharp
private void ResetBackupConfig()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExportPolicy` <a name="ResetExportPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetExportPolicy"></a>

```csharp
private void ResetExportPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKerberosEnabled` <a name="ResetKerberosEnabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetKerberosEnabled"></a>

```csharp
private void ResetKerberosEnabled()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLargeCapacity` <a name="ResetLargeCapacity" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetLargeCapacity"></a>

```csharp
private void ResetLargeCapacity()
```

##### `ResetMultipleEndpoints` <a name="ResetMultipleEndpoints" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetMultipleEndpoints"></a>

```csharp
private void ResetMultipleEndpoints()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRestoreParameters` <a name="ResetRestoreParameters" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetRestoreParameters"></a>

```csharp
private void ResetRestoreParameters()
```

##### `ResetRestrictedActions` <a name="ResetRestrictedActions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetRestrictedActions"></a>

```csharp
private void ResetRestrictedActions()
```

##### `ResetSecurityStyle` <a name="ResetSecurityStyle" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSecurityStyle"></a>

```csharp
private void ResetSecurityStyle()
```

##### `ResetSmbSettings` <a name="ResetSmbSettings" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSmbSettings"></a>

```csharp
private void ResetSmbSettings()
```

##### `ResetSnapshotDirectory` <a name="ResetSnapshotDirectory" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSnapshotDirectory"></a>

```csharp
private void ResetSnapshotDirectory()
```

##### `ResetSnapshotPolicy` <a name="ResetSnapshotPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSnapshotPolicy"></a>

```csharp
private void ResetSnapshotPolicy()
```

##### `ResetTieringPolicy` <a name="ResetTieringPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetTieringPolicy"></a>

```csharp
private void ResetTieringPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUnixPermissions` <a name="ResetUnixPermissions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetUnixPermissions"></a>

```csharp
private void ResetUnixPermissions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetappVolume resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetappVolume.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetappVolume.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetappVolume.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetappVolume.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNetappVolume resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetappVolume to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetappVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetappVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.activeDirectory">ActiveDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.backupConfig">BackupConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference">GoogleNetappVolumeBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.coldTierSizeGib">ColdTierSizeGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.exportPolicy">ExportPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference">GoogleNetappVolumeExportPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.hasReplication">HasReplication</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kmsConfig">KmsConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.ldapEnabled">LdapEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.mountOptions">MountOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList">GoogleNetappVolumeMountOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.psaRange">PsaRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.replicaZone">ReplicaZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restoreParameters">RestoreParameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference">GoogleNetappVolumeRestoreParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.serviceLevel">ServiceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotPolicy">SnapshotPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference">GoogleNetappVolumeSnapshotPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.stateDetails">StateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tieringPolicy">TieringPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference">GoogleNetappVolumeTieringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference">GoogleNetappVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.usedGib">UsedGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.backupConfigInput">BackupConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.capacityGibInput">CapacityGibInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.exportPolicyInput">ExportPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kerberosEnabledInput">KerberosEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.largeCapacityInput">LargeCapacityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.multipleEndpointsInput">MultipleEndpointsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.protocolsInput">ProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restoreParametersInput">RestoreParametersInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restrictedActionsInput">RestrictedActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.securityStyleInput">SecurityStyleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.shareNameInput">ShareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.smbSettingsInput">SmbSettingsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotDirectoryInput">SnapshotDirectoryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotPolicyInput">SnapshotPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.storagePoolInput">StoragePoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tieringPolicyInput">TieringPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.unixPermissionsInput">UnixPermissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.capacityGib">CapacityGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kerberosEnabled">KerberosEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.largeCapacity">LargeCapacity</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.multipleEndpoints">MultipleEndpoints</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.protocols">Protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restrictedActions">RestrictedActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.securityStyle">SecurityStyle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.shareName">ShareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.smbSettings">SmbSettings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotDirectory">SnapshotDirectory</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.storagePool">StoragePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.unixPermissions">UnixPermissions</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActiveDirectory`<sup>Required</sup> <a name="ActiveDirectory" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.activeDirectory"></a>

```csharp
public string ActiveDirectory { get; }
```

- *Type:* string

---

##### `BackupConfig`<sup>Required</sup> <a name="BackupConfig" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.backupConfig"></a>

```csharp
public GoogleNetappVolumeBackupConfigOutputReference BackupConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference">GoogleNetappVolumeBackupConfigOutputReference</a>

---

##### `ColdTierSizeGib`<sup>Required</sup> <a name="ColdTierSizeGib" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.coldTierSizeGib"></a>

```csharp
public string ColdTierSizeGib { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `ExportPolicy`<sup>Required</sup> <a name="ExportPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.exportPolicy"></a>

```csharp
public GoogleNetappVolumeExportPolicyOutputReference ExportPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference">GoogleNetappVolumeExportPolicyOutputReference</a>

---

##### `HasReplication`<sup>Required</sup> <a name="HasReplication" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.hasReplication"></a>

```csharp
public IResolvable HasReplication { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `KmsConfig`<sup>Required</sup> <a name="KmsConfig" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kmsConfig"></a>

```csharp
public string KmsConfig { get; }
```

- *Type:* string

---

##### `LdapEnabled`<sup>Required</sup> <a name="LdapEnabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.ldapEnabled"></a>

```csharp
public IResolvable LdapEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.mountOptions"></a>

```csharp
public GoogleNetappVolumeMountOptionsList MountOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList">GoogleNetappVolumeMountOptionsList</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `PsaRange`<sup>Required</sup> <a name="PsaRange" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.psaRange"></a>

```csharp
public string PsaRange { get; }
```

- *Type:* string

---

##### `ReplicaZone`<sup>Required</sup> <a name="ReplicaZone" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.replicaZone"></a>

```csharp
public string ReplicaZone { get; }
```

- *Type:* string

---

##### `RestoreParameters`<sup>Required</sup> <a name="RestoreParameters" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restoreParameters"></a>

```csharp
public GoogleNetappVolumeRestoreParametersOutputReference RestoreParameters { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference">GoogleNetappVolumeRestoreParametersOutputReference</a>

---

##### `ServiceLevel`<sup>Required</sup> <a name="ServiceLevel" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.serviceLevel"></a>

```csharp
public string ServiceLevel { get; }
```

- *Type:* string

---

##### `SnapshotPolicy`<sup>Required</sup> <a name="SnapshotPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotPolicy"></a>

```csharp
public GoogleNetappVolumeSnapshotPolicyOutputReference SnapshotPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference">GoogleNetappVolumeSnapshotPolicyOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateDetails`<sup>Required</sup> <a name="StateDetails" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.stateDetails"></a>

```csharp
public string StateDetails { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TieringPolicy`<sup>Required</sup> <a name="TieringPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tieringPolicy"></a>

```csharp
public GoogleNetappVolumeTieringPolicyOutputReference TieringPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference">GoogleNetappVolumeTieringPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.timeouts"></a>

```csharp
public GoogleNetappVolumeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference">GoogleNetappVolumeTimeoutsOutputReference</a>

---

##### `UsedGib`<sup>Required</sup> <a name="UsedGib" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.usedGib"></a>

```csharp
public string UsedGib { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `BackupConfigInput`<sup>Optional</sup> <a name="BackupConfigInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.backupConfigInput"></a>

```csharp
public GoogleNetappVolumeBackupConfig BackupConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a>

---

##### `CapacityGibInput`<sup>Optional</sup> <a name="CapacityGibInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.capacityGibInput"></a>

```csharp
public string CapacityGibInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExportPolicyInput`<sup>Optional</sup> <a name="ExportPolicyInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.exportPolicyInput"></a>

```csharp
public GoogleNetappVolumeExportPolicy ExportPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KerberosEnabledInput`<sup>Optional</sup> <a name="KerberosEnabledInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kerberosEnabledInput"></a>

```csharp
public object KerberosEnabledInput { get; }
```

- *Type:* object

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LargeCapacityInput`<sup>Optional</sup> <a name="LargeCapacityInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.largeCapacityInput"></a>

```csharp
public object LargeCapacityInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MultipleEndpointsInput`<sup>Optional</sup> <a name="MultipleEndpointsInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.multipleEndpointsInput"></a>

```csharp
public object MultipleEndpointsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.protocolsInput"></a>

```csharp
public string[] ProtocolsInput { get; }
```

- *Type:* string[]

---

##### `RestoreParametersInput`<sup>Optional</sup> <a name="RestoreParametersInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restoreParametersInput"></a>

```csharp
public GoogleNetappVolumeRestoreParameters RestoreParametersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a>

---

##### `RestrictedActionsInput`<sup>Optional</sup> <a name="RestrictedActionsInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restrictedActionsInput"></a>

```csharp
public string[] RestrictedActionsInput { get; }
```

- *Type:* string[]

---

##### `SecurityStyleInput`<sup>Optional</sup> <a name="SecurityStyleInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.securityStyleInput"></a>

```csharp
public string SecurityStyleInput { get; }
```

- *Type:* string

---

##### `ShareNameInput`<sup>Optional</sup> <a name="ShareNameInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.shareNameInput"></a>

```csharp
public string ShareNameInput { get; }
```

- *Type:* string

---

##### `SmbSettingsInput`<sup>Optional</sup> <a name="SmbSettingsInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.smbSettingsInput"></a>

```csharp
public string[] SmbSettingsInput { get; }
```

- *Type:* string[]

---

##### `SnapshotDirectoryInput`<sup>Optional</sup> <a name="SnapshotDirectoryInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotDirectoryInput"></a>

```csharp
public object SnapshotDirectoryInput { get; }
```

- *Type:* object

---

##### `SnapshotPolicyInput`<sup>Optional</sup> <a name="SnapshotPolicyInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotPolicyInput"></a>

```csharp
public GoogleNetappVolumeSnapshotPolicy SnapshotPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a>

---

##### `StoragePoolInput`<sup>Optional</sup> <a name="StoragePoolInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.storagePoolInput"></a>

```csharp
public string StoragePoolInput { get; }
```

- *Type:* string

---

##### `TieringPolicyInput`<sup>Optional</sup> <a name="TieringPolicyInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tieringPolicyInput"></a>

```csharp
public GoogleNetappVolumeTieringPolicy TieringPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UnixPermissionsInput`<sup>Optional</sup> <a name="UnixPermissionsInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.unixPermissionsInput"></a>

```csharp
public string UnixPermissionsInput { get; }
```

- *Type:* string

---

##### `CapacityGib`<sup>Required</sup> <a name="CapacityGib" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.capacityGib"></a>

```csharp
public string CapacityGib { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KerberosEnabled`<sup>Required</sup> <a name="KerberosEnabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kerberosEnabled"></a>

```csharp
public object KerberosEnabled { get; }
```

- *Type:* object

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LargeCapacity`<sup>Required</sup> <a name="LargeCapacity" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.largeCapacity"></a>

```csharp
public object LargeCapacity { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MultipleEndpoints`<sup>Required</sup> <a name="MultipleEndpoints" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.multipleEndpoints"></a>

```csharp
public object MultipleEndpoints { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.protocols"></a>

```csharp
public string[] Protocols { get; }
```

- *Type:* string[]

---

##### `RestrictedActions`<sup>Required</sup> <a name="RestrictedActions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restrictedActions"></a>

```csharp
public string[] RestrictedActions { get; }
```

- *Type:* string[]

---

##### `SecurityStyle`<sup>Required</sup> <a name="SecurityStyle" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.securityStyle"></a>

```csharp
public string SecurityStyle { get; }
```

- *Type:* string

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.shareName"></a>

```csharp
public string ShareName { get; }
```

- *Type:* string

---

##### `SmbSettings`<sup>Required</sup> <a name="SmbSettings" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.smbSettings"></a>

```csharp
public string[] SmbSettings { get; }
```

- *Type:* string[]

---

##### `SnapshotDirectory`<sup>Required</sup> <a name="SnapshotDirectory" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotDirectory"></a>

```csharp
public object SnapshotDirectory { get; }
```

- *Type:* object

---

##### `StoragePool`<sup>Required</sup> <a name="StoragePool" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.storagePool"></a>

```csharp
public string StoragePool { get; }
```

- *Type:* string

---

##### `UnixPermissions`<sup>Required</sup> <a name="UnixPermissions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.unixPermissions"></a>

```csharp
public string UnixPermissions { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetappVolumeBackupConfig <a name="GoogleNetappVolumeBackupConfig" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeBackupConfig {
    string[] BackupPolicies = null,
    string BackupVault = null,
    object ScheduledBackupEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.backupPolicies">BackupPolicies</a></code> | <code>string[]</code> | Specify a single backup policy ID for scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupPolicies/{{backupPolicyName}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.backupVault">BackupVault</a></code> | <code>string</code> | ID of the backup vault to use. A backup vault is reqired to create manual or scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupVaults/{{backupVaultName}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.scheduledBackupEnabled">ScheduledBackupEnabled</a></code> | <code>object</code> | When set to true, scheduled backup is enabled on the volume. Omit if no backup_policy is specified. |

---

##### `BackupPolicies`<sup>Optional</sup> <a name="BackupPolicies" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.backupPolicies"></a>

```csharp
public string[] BackupPolicies { get; set; }
```

- *Type:* string[]

Specify a single backup policy ID for scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupPolicies/{{backupPolicyName}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#backup_policies GoogleNetappVolume#backup_policies}

---

##### `BackupVault`<sup>Optional</sup> <a name="BackupVault" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.backupVault"></a>

```csharp
public string BackupVault { get; set; }
```

- *Type:* string

ID of the backup vault to use. A backup vault is reqired to create manual or scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupVaults/{{backupVaultName}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#backup_vault GoogleNetappVolume#backup_vault}

---

##### `ScheduledBackupEnabled`<sup>Optional</sup> <a name="ScheduledBackupEnabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.scheduledBackupEnabled"></a>

```csharp
public object ScheduledBackupEnabled { get; set; }
```

- *Type:* object

When set to true, scheduled backup is enabled on the volume. Omit if no backup_policy is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#scheduled_backup_enabled GoogleNetappVolume#scheduled_backup_enabled}

---

### GoogleNetappVolumeConfig <a name="GoogleNetappVolumeConfig" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CapacityGib,
    string Location,
    string Name,
    string[] Protocols,
    string ShareName,
    string StoragePool,
    GoogleNetappVolumeBackupConfig BackupConfig = null,
    string DeletionPolicy = null,
    string Description = null,
    GoogleNetappVolumeExportPolicy ExportPolicy = null,
    string Id = null,
    object KerberosEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    object LargeCapacity = null,
    object MultipleEndpoints = null,
    string Project = null,
    GoogleNetappVolumeRestoreParameters RestoreParameters = null,
    string[] RestrictedActions = null,
    string SecurityStyle = null,
    string[] SmbSettings = null,
    object SnapshotDirectory = null,
    GoogleNetappVolumeSnapshotPolicy SnapshotPolicy = null,
    GoogleNetappVolumeTieringPolicy TieringPolicy = null,
    GoogleNetappVolumeTimeouts Timeouts = null,
    string UnixPermissions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.capacityGib">CapacityGib</a></code> | <code>string</code> | Capacity of the volume (in GiB). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.location">Location</a></code> | <code>string</code> | Name of the pool location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.name">Name</a></code> | <code>string</code> | The name of the volume. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.protocols">Protocols</a></code> | <code>string[]</code> | The protocol of the volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.shareName">ShareName</a></code> | <code>string</code> | Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.storagePool">StoragePool</a></code> | <code>string</code> | Name of the storage pool to create the volume in. Pool needs enough spare capacity to accommodate the volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.backupConfig">BackupConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a></code> | backup_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Policy to determine if the volume should be deleted forcefully. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.exportPolicy">ExportPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a></code> | export_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#id GoogleNetappVolume#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.kerberosEnabled">KerberosEnabled</a></code> | <code>object</code> | Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.largeCapacity">LargeCapacity</a></code> | <code>object</code> | Optional. Flag indicating if the volume will be a large capacity volume or a regular volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.multipleEndpoints">MultipleEndpoints</a></code> | <code>object</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#project GoogleNetappVolume#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.restoreParameters">RestoreParameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a></code> | restore_parameters block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.restrictedActions">RestrictedActions</a></code> | <code>string[]</code> | List of actions that are restricted on this volume. Possible values: ["DELETE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.securityStyle">SecurityStyle</a></code> | <code>string</code> | Security Style of the Volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.smbSettings">SmbSettings</a></code> | <code>string[]</code> | Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.snapshotDirectory">SnapshotDirectory</a></code> | <code>object</code> | If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.snapshotPolicy">SnapshotPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a></code> | snapshot_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.tieringPolicy">TieringPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a></code> | tiering_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts">GoogleNetappVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.unixPermissions">UnixPermissions</a></code> | <code>string</code> | Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CapacityGib`<sup>Required</sup> <a name="CapacityGib" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.capacityGib"></a>

```csharp
public string CapacityGib { get; set; }
```

- *Type:* string

Capacity of the volume (in GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#capacity_gib GoogleNetappVolume#capacity_gib}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Name of the pool location.

Usually a region name, expect for some STANDARD service level pools which require a zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#location GoogleNetappVolume#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#name GoogleNetappVolume#name}

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.protocols"></a>

```csharp
public string[] Protocols { get; set; }
```

- *Type:* string[]

The protocol of the volume.

Allowed combinations are '['NFSV3']', '['NFSV4']', '['SMB']', '['NFSV3', 'NFSV4']', '['SMB', 'NFSV3']' and '['SMB', 'NFSV4']'. Possible values: ["NFSV3", "NFSV4", "SMB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#protocols GoogleNetappVolume#protocols}

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.shareName"></a>

```csharp
public string ShareName { get; set; }
```

- *Type:* string

Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#share_name GoogleNetappVolume#share_name}

---

##### `StoragePool`<sup>Required</sup> <a name="StoragePool" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.storagePool"></a>

```csharp
public string StoragePool { get; set; }
```

- *Type:* string

Name of the storage pool to create the volume in. Pool needs enough spare capacity to accommodate the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#storage_pool GoogleNetappVolume#storage_pool}

---

##### `BackupConfig`<sup>Optional</sup> <a name="BackupConfig" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.backupConfig"></a>

```csharp
public GoogleNetappVolumeBackupConfig BackupConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a>

backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#backup_config GoogleNetappVolume#backup_config}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Policy to determine if the volume should be deleted forcefully.

Volumes may have nested snapshot resources. Deleting such a volume will fail.
Setting this parameter to FORCE will delete volumes including nested snapshots.
Possible values: DEFAULT, FORCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#deletion_policy GoogleNetappVolume#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#description GoogleNetappVolume#description}

---

##### `ExportPolicy`<sup>Optional</sup> <a name="ExportPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.exportPolicy"></a>

```csharp
public GoogleNetappVolumeExportPolicy ExportPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a>

export_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#export_policy GoogleNetappVolume#export_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#id GoogleNetappVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KerberosEnabled`<sup>Optional</sup> <a name="KerberosEnabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.kerberosEnabled"></a>

```csharp
public object KerberosEnabled { get; set; }
```

- *Type:* object

Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#kerberos_enabled GoogleNetappVolume#kerberos_enabled}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#labels GoogleNetappVolume#labels}

---

##### `LargeCapacity`<sup>Optional</sup> <a name="LargeCapacity" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.largeCapacity"></a>

```csharp
public object LargeCapacity { get; set; }
```

- *Type:* object

Optional. Flag indicating if the volume will be a large capacity volume or a regular volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#large_capacity GoogleNetappVolume#large_capacity}

---

##### `MultipleEndpoints`<sup>Optional</sup> <a name="MultipleEndpoints" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.multipleEndpoints"></a>

```csharp
public object MultipleEndpoints { get; set; }
```

- *Type:* object

Optional.

Flag indicating if the volume will have an IP address per node for volumes supporting multiple IP endpoints.
Only the volume with largeCapacity will be allowed to have multiple endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#multiple_endpoints GoogleNetappVolume#multiple_endpoints}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#project GoogleNetappVolume#project}.

---

##### `RestoreParameters`<sup>Optional</sup> <a name="RestoreParameters" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.restoreParameters"></a>

```csharp
public GoogleNetappVolumeRestoreParameters RestoreParameters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a>

restore_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#restore_parameters GoogleNetappVolume#restore_parameters}

---

##### `RestrictedActions`<sup>Optional</sup> <a name="RestrictedActions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.restrictedActions"></a>

```csharp
public string[] RestrictedActions { get; set; }
```

- *Type:* string[]

List of actions that are restricted on this volume. Possible values: ["DELETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#restricted_actions GoogleNetappVolume#restricted_actions}

---

##### `SecurityStyle`<sup>Optional</sup> <a name="SecurityStyle" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.securityStyle"></a>

```csharp
public string SecurityStyle { get; set; }
```

- *Type:* string

Security Style of the Volume.

Use UNIX to use UNIX or NFSV4 ACLs for file permissions.
Use NTFS to use NTFS ACLs for file permissions. Can only be set for volumes which use SMB together with NFS as protocol. Possible values: ["NTFS", "UNIX"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#security_style GoogleNetappVolume#security_style}

---

##### `SmbSettings`<sup>Optional</sup> <a name="SmbSettings" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.smbSettings"></a>

```csharp
public string[] SmbSettings { get; set; }
```

- *Type:* string[]

Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#smb_settings GoogleNetappVolume#smb_settings}

---

##### `SnapshotDirectory`<sup>Optional</sup> <a name="SnapshotDirectory" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.snapshotDirectory"></a>

```csharp
public object SnapshotDirectory { get; set; }
```

- *Type:* object

If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#snapshot_directory GoogleNetappVolume#snapshot_directory}

---

##### `SnapshotPolicy`<sup>Optional</sup> <a name="SnapshotPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.snapshotPolicy"></a>

```csharp
public GoogleNetappVolumeSnapshotPolicy SnapshotPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a>

snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#snapshot_policy GoogleNetappVolume#snapshot_policy}

---

##### `TieringPolicy`<sup>Optional</sup> <a name="TieringPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.tieringPolicy"></a>

```csharp
public GoogleNetappVolumeTieringPolicy TieringPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a>

tiering_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#tiering_policy GoogleNetappVolume#tiering_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.timeouts"></a>

```csharp
public GoogleNetappVolumeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts">GoogleNetappVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#timeouts GoogleNetappVolume#timeouts}

---

##### `UnixPermissions`<sup>Optional</sup> <a name="UnixPermissions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.unixPermissions"></a>

```csharp
public string UnixPermissions { get; set; }
```

- *Type:* string

Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#unix_permissions GoogleNetappVolume#unix_permissions}

---

### GoogleNetappVolumeExportPolicy <a name="GoogleNetappVolumeExportPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeExportPolicy {
    object Rules
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy.property.rules">Rules</a></code> | <code>object</code> | rules block. |

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#rules GoogleNetappVolume#rules}

---

### GoogleNetappVolumeExportPolicyRules <a name="GoogleNetappVolumeExportPolicyRules" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeExportPolicyRules {
    string AccessType = null,
    string AllowedClients = null,
    string HasRootAccess = null,
    object Kerberos5IReadOnly = null,
    object Kerberos5IReadWrite = null,
    object Kerberos5PReadOnly = null,
    object Kerberos5PReadWrite = null,
    object Kerberos5ReadOnly = null,
    object Kerberos5ReadWrite = null,
    object Nfsv3 = null,
    object Nfsv4 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.accessType">AccessType</a></code> | <code>string</code> | Defines the access type for clients matching the 'allowedClients' specification. Possible values: ["READ_ONLY", "READ_WRITE", "READ_NONE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.allowedClients">AllowedClients</a></code> | <code>string</code> | Defines the client ingress specification (allowed clients) as a comma separated list with IPv4 CIDRs or IPv4 host addresses. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.hasRootAccess">HasRootAccess</a></code> | <code>string</code> | If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5IReadOnly">Kerberos5IReadOnly</a></code> | <code>object</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5IReadWrite">Kerberos5IReadWrite</a></code> | <code>object</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5PReadOnly">Kerberos5PReadOnly</a></code> | <code>object</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5PReadWrite">Kerberos5PReadWrite</a></code> | <code>object</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5ReadOnly">Kerberos5ReadOnly</a></code> | <code>object</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5ReadWrite">Kerberos5ReadWrite</a></code> | <code>object</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.nfsv3">Nfsv3</a></code> | <code>object</code> | Enable to apply the export rule to NFSV3 clients. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.nfsv4">Nfsv4</a></code> | <code>object</code> | Enable to apply the export rule to NFSV4.1 clients. |

---

##### `AccessType`<sup>Optional</sup> <a name="AccessType" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.accessType"></a>

```csharp
public string AccessType { get; set; }
```

- *Type:* string

Defines the access type for clients matching the 'allowedClients' specification. Possible values: ["READ_ONLY", "READ_WRITE", "READ_NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#access_type GoogleNetappVolume#access_type}

---

##### `AllowedClients`<sup>Optional</sup> <a name="AllowedClients" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.allowedClients"></a>

```csharp
public string AllowedClients { get; set; }
```

- *Type:* string

Defines the client ingress specification (allowed clients) as a comma separated list with IPv4 CIDRs or IPv4 host addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#allowed_clients GoogleNetappVolume#allowed_clients}

---

##### `HasRootAccess`<sup>Optional</sup> <a name="HasRootAccess" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.hasRootAccess"></a>

```csharp
public string HasRootAccess { get; set; }
```

- *Type:* string

If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534).

This is also known as no_root_squash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#has_root_access GoogleNetappVolume#has_root_access}

---

##### `Kerberos5IReadOnly`<sup>Optional</sup> <a name="Kerberos5IReadOnly" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5IReadOnly"></a>

```csharp
public object Kerberos5IReadOnly { get; set; }
```

- *Type:* object

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'integrity' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#kerberos5i_read_only GoogleNetappVolume#kerberos5i_read_only}

---

##### `Kerberos5IReadWrite`<sup>Optional</sup> <a name="Kerberos5IReadWrite" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5IReadWrite"></a>

```csharp
public object Kerberos5IReadWrite { get; set; }
```

- *Type:* object

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'integrity' kerberos security mode. The 'kerberos5iReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#kerberos5i_read_write GoogleNetappVolume#kerberos5i_read_write}

---

##### `Kerberos5PReadOnly`<sup>Optional</sup> <a name="Kerberos5PReadOnly" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5PReadOnly"></a>

```csharp
public object Kerberos5PReadOnly { get; set; }
```

- *Type:* object

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'privacy' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#kerberos5p_read_only GoogleNetappVolume#kerberos5p_read_only}

---

##### `Kerberos5PReadWrite`<sup>Optional</sup> <a name="Kerberos5PReadWrite" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5PReadWrite"></a>

```csharp
public object Kerberos5PReadWrite { get; set; }
```

- *Type:* object

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'privacy' kerberos security mode. The 'kerberos5pReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#kerberos5p_read_write GoogleNetappVolume#kerberos5p_read_write}

---

##### `Kerberos5ReadOnly`<sup>Optional</sup> <a name="Kerberos5ReadOnly" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5ReadOnly"></a>

```csharp
public object Kerberos5ReadOnly { get; set; }
```

- *Type:* object

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'authentication' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#kerberos5_read_only GoogleNetappVolume#kerberos5_read_only}

---

##### `Kerberos5ReadWrite`<sup>Optional</sup> <a name="Kerberos5ReadWrite" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5ReadWrite"></a>

```csharp
public object Kerberos5ReadWrite { get; set; }
```

- *Type:* object

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'authentication' kerberos security mode. The 'kerberos5ReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#kerberos5_read_write GoogleNetappVolume#kerberos5_read_write}

---

##### `Nfsv3`<sup>Optional</sup> <a name="Nfsv3" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.nfsv3"></a>

```csharp
public object Nfsv3 { get; set; }
```

- *Type:* object

Enable to apply the export rule to NFSV3 clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#nfsv3 GoogleNetappVolume#nfsv3}

---

##### `Nfsv4`<sup>Optional</sup> <a name="Nfsv4" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.nfsv4"></a>

```csharp
public object Nfsv4 { get; set; }
```

- *Type:* object

Enable to apply the export rule to NFSV4.1 clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#nfsv4 GoogleNetappVolume#nfsv4}

---

### GoogleNetappVolumeMountOptions <a name="GoogleNetappVolumeMountOptions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeMountOptions {

};
```


### GoogleNetappVolumeRestoreParameters <a name="GoogleNetappVolumeRestoreParameters" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeRestoreParameters {
    string SourceBackup = null,
    string SourceSnapshot = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters.property.sourceBackup">SourceBackup</a></code> | <code>string</code> | Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters.property.sourceSnapshot">SourceSnapshot</a></code> | <code>string</code> | Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}'. |

---

##### `SourceBackup`<sup>Optional</sup> <a name="SourceBackup" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters.property.sourceBackup"></a>

```csharp
public string SourceBackup { get; set; }
```

- *Type:* string

Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#source_backup GoogleNetappVolume#source_backup}

---

##### `SourceSnapshot`<sup>Optional</sup> <a name="SourceSnapshot" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters.property.sourceSnapshot"></a>

```csharp
public string SourceSnapshot { get; set; }
```

- *Type:* string

Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#source_snapshot GoogleNetappVolume#source_snapshot}

---

### GoogleNetappVolumeSnapshotPolicy <a name="GoogleNetappVolumeSnapshotPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeSnapshotPolicy {
    GoogleNetappVolumeSnapshotPolicyDailySchedule DailySchedule = null,
    object Enabled = null,
    GoogleNetappVolumeSnapshotPolicyHourlySchedule HourlySchedule = null,
    GoogleNetappVolumeSnapshotPolicyMonthlySchedule MonthlySchedule = null,
    GoogleNetappVolumeSnapshotPolicyWeeklySchedule WeeklySchedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.dailySchedule">DailySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a></code> | daily_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.enabled">Enabled</a></code> | <code>object</code> | Enables automated snapshot creation according to defined schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.hourlySchedule">HourlySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a></code> | hourly_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.monthlySchedule">MonthlySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a></code> | monthly_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `DailySchedule`<sup>Optional</sup> <a name="DailySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.dailySchedule"></a>

```csharp
public GoogleNetappVolumeSnapshotPolicyDailySchedule DailySchedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a>

daily_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#daily_schedule GoogleNetappVolume#daily_schedule}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Enables automated snapshot creation according to defined schedule.

Default is false.
To disable automatic snapshot creation you have to remove the whole snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#enabled GoogleNetappVolume#enabled}

---

##### `HourlySchedule`<sup>Optional</sup> <a name="HourlySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.hourlySchedule"></a>

```csharp
public GoogleNetappVolumeSnapshotPolicyHourlySchedule HourlySchedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a>

hourly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#hourly_schedule GoogleNetappVolume#hourly_schedule}

---

##### `MonthlySchedule`<sup>Optional</sup> <a name="MonthlySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.monthlySchedule"></a>

```csharp
public GoogleNetappVolumeSnapshotPolicyMonthlySchedule MonthlySchedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a>

monthly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#monthly_schedule GoogleNetappVolume#monthly_schedule}

---

##### `WeeklySchedule`<sup>Optional</sup> <a name="WeeklySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.weeklySchedule"></a>

```csharp
public GoogleNetappVolumeSnapshotPolicyWeeklySchedule WeeklySchedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#weekly_schedule GoogleNetappVolume#weekly_schedule}

---

### GoogleNetappVolumeSnapshotPolicyDailySchedule <a name="GoogleNetappVolumeSnapshotPolicyDailySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeSnapshotPolicyDailySchedule {
    double SnapshotsToKeep,
    double Hour = null,
    double Minute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>double</code> | The maximum number of snapshots to keep for the daily schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.hour">Hour</a></code> | <code>double</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.minute">Minute</a></code> | <code>double</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.snapshotsToKeep"></a>

```csharp
public double SnapshotsToKeep { get; set; }
```

- *Type:* double

The maximum number of snapshots to keep for the daily schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}

---

##### `Hour`<sup>Optional</sup> <a name="Hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.hour"></a>

```csharp
public double Hour { get; set; }
```

- *Type:* double

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#hour GoogleNetappVolume#hour}

---

##### `Minute`<sup>Optional</sup> <a name="Minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.minute"></a>

```csharp
public double Minute { get; set; }
```

- *Type:* double

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}

---

### GoogleNetappVolumeSnapshotPolicyHourlySchedule <a name="GoogleNetappVolumeSnapshotPolicyHourlySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeSnapshotPolicyHourlySchedule {
    double SnapshotsToKeep,
    double Minute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>double</code> | The maximum number of snapshots to keep for the hourly schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule.property.minute">Minute</a></code> | <code>double</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule.property.snapshotsToKeep"></a>

```csharp
public double SnapshotsToKeep { get; set; }
```

- *Type:* double

The maximum number of snapshots to keep for the hourly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}

---

##### `Minute`<sup>Optional</sup> <a name="Minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule.property.minute"></a>

```csharp
public double Minute { get; set; }
```

- *Type:* double

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}

---

### GoogleNetappVolumeSnapshotPolicyMonthlySchedule <a name="GoogleNetappVolumeSnapshotPolicyMonthlySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeSnapshotPolicyMonthlySchedule {
    double SnapshotsToKeep,
    string DaysOfMonth = null,
    double Hour = null,
    double Minute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>double</code> | The maximum number of snapshots to keep for the monthly schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.daysOfMonth">DaysOfMonth</a></code> | <code>string</code> | Set the day or days of the month to make a snapshot (1-31). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.hour">Hour</a></code> | <code>double</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.minute">Minute</a></code> | <code>double</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.snapshotsToKeep"></a>

```csharp
public double SnapshotsToKeep { get; set; }
```

- *Type:* double

The maximum number of snapshots to keep for the monthly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}

---

##### `DaysOfMonth`<sup>Optional</sup> <a name="DaysOfMonth" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.daysOfMonth"></a>

```csharp
public string DaysOfMonth { get; set; }
```

- *Type:* string

Set the day or days of the month to make a snapshot (1-31).

Accepts a comma separated number of days. Defaults to '1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#days_of_month GoogleNetappVolume#days_of_month}

---

##### `Hour`<sup>Optional</sup> <a name="Hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.hour"></a>

```csharp
public double Hour { get; set; }
```

- *Type:* double

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#hour GoogleNetappVolume#hour}

---

##### `Minute`<sup>Optional</sup> <a name="Minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.minute"></a>

```csharp
public double Minute { get; set; }
```

- *Type:* double

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}

---

### GoogleNetappVolumeSnapshotPolicyWeeklySchedule <a name="GoogleNetappVolumeSnapshotPolicyWeeklySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeSnapshotPolicyWeeklySchedule {
    double SnapshotsToKeep,
    string Day = null,
    double Hour = null,
    double Minute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>double</code> | The maximum number of snapshots to keep for the weekly schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.day">Day</a></code> | <code>string</code> | Set the day or days of the week to make a snapshot. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.hour">Hour</a></code> | <code>double</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.minute">Minute</a></code> | <code>double</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.snapshotsToKeep"></a>

```csharp
public double SnapshotsToKeep { get; set; }
```

- *Type:* double

The maximum number of snapshots to keep for the weekly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.day"></a>

```csharp
public string Day { get; set; }
```

- *Type:* string

Set the day or days of the week to make a snapshot.

Accepts a comma separated days of the week. Defaults to 'Sunday'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#day GoogleNetappVolume#day}

---

##### `Hour`<sup>Optional</sup> <a name="Hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.hour"></a>

```csharp
public double Hour { get; set; }
```

- *Type:* double

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#hour GoogleNetappVolume#hour}

---

##### `Minute`<sup>Optional</sup> <a name="Minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.minute"></a>

```csharp
public double Minute { get; set; }
```

- *Type:* double

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}

---

### GoogleNetappVolumeTieringPolicy <a name="GoogleNetappVolumeTieringPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeTieringPolicy {
    double CoolingThresholdDays = null,
    string TierAction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy.property.coolingThresholdDays">CoolingThresholdDays</a></code> | <code>double</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy.property.tierAction">TierAction</a></code> | <code>string</code> | Optional. |

---

##### `CoolingThresholdDays`<sup>Optional</sup> <a name="CoolingThresholdDays" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy.property.coolingThresholdDays"></a>

```csharp
public double CoolingThresholdDays { get; set; }
```

- *Type:* double

Optional.

Time in days to mark the volume's data block as cold and make it eligible for tiering, can be range from 7-183.
Default is 31.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#cooling_threshold_days GoogleNetappVolume#cooling_threshold_days}

---

##### `TierAction`<sup>Optional</sup> <a name="TierAction" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy.property.tierAction"></a>

```csharp
public string TierAction { get; set; }
```

- *Type:* string

Optional.

Flag indicating if the volume has tiering policy enable/pause. Default is PAUSED. Default value: "PAUSED" Possible values: ["ENABLED", "PAUSED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#tier_action GoogleNetappVolume#tier_action}

---

### GoogleNetappVolumeTimeouts <a name="GoogleNetappVolumeTimeouts" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#create GoogleNetappVolume#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#delete GoogleNetappVolume#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#update GoogleNetappVolume#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#create GoogleNetappVolume#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#delete GoogleNetappVolume#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_netapp_volume#update GoogleNetappVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetappVolumeBackupConfigOutputReference <a name="GoogleNetappVolumeBackupConfigOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeBackupConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetBackupPolicies">ResetBackupPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetBackupVault">ResetBackupVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetScheduledBackupEnabled">ResetScheduledBackupEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupPolicies` <a name="ResetBackupPolicies" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetBackupPolicies"></a>

```csharp
private void ResetBackupPolicies()
```

##### `ResetBackupVault` <a name="ResetBackupVault" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetBackupVault"></a>

```csharp
private void ResetBackupVault()
```

##### `ResetScheduledBackupEnabled` <a name="ResetScheduledBackupEnabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetScheduledBackupEnabled"></a>

```csharp
private void ResetScheduledBackupEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupPoliciesInput">BackupPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupVaultInput">BackupVaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabledInput">ScheduledBackupEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupPolicies">BackupPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupVault">BackupVault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabled">ScheduledBackupEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupPoliciesInput`<sup>Optional</sup> <a name="BackupPoliciesInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupPoliciesInput"></a>

```csharp
public string[] BackupPoliciesInput { get; }
```

- *Type:* string[]

---

##### `BackupVaultInput`<sup>Optional</sup> <a name="BackupVaultInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupVaultInput"></a>

```csharp
public string BackupVaultInput { get; }
```

- *Type:* string

---

##### `ScheduledBackupEnabledInput`<sup>Optional</sup> <a name="ScheduledBackupEnabledInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabledInput"></a>

```csharp
public object ScheduledBackupEnabledInput { get; }
```

- *Type:* object

---

##### `BackupPolicies`<sup>Required</sup> <a name="BackupPolicies" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupPolicies"></a>

```csharp
public string[] BackupPolicies { get; }
```

- *Type:* string[]

---

##### `BackupVault`<sup>Required</sup> <a name="BackupVault" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupVault"></a>

```csharp
public string BackupVault { get; }
```

- *Type:* string

---

##### `ScheduledBackupEnabled`<sup>Required</sup> <a name="ScheduledBackupEnabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabled"></a>

```csharp
public object ScheduledBackupEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleNetappVolumeBackupConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a>

---


### GoogleNetappVolumeExportPolicyOutputReference <a name="GoogleNetappVolumeExportPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeExportPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.putRules">PutRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.putRules.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList">GoogleNetappVolumeExportPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.rules"></a>

```csharp
public GoogleNetappVolumeExportPolicyRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList">GoogleNetappVolumeExportPolicyRulesList</a>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleNetappVolumeExportPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a>

---


### GoogleNetappVolumeExportPolicyRulesList <a name="GoogleNetappVolumeExportPolicyRulesList" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeExportPolicyRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.get"></a>

```csharp
private GoogleNetappVolumeExportPolicyRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNetappVolumeExportPolicyRulesOutputReference <a name="GoogleNetappVolumeExportPolicyRulesOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeExportPolicyRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetAccessType">ResetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetAllowedClients">ResetAllowedClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetHasRootAccess">ResetHasRootAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadOnly">ResetKerberos5IReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadWrite">ResetKerberos5IReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadOnly">ResetKerberos5PReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadWrite">ResetKerberos5PReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadOnly">ResetKerberos5ReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadWrite">ResetKerberos5ReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetNfsv3">ResetNfsv3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetNfsv4">ResetNfsv4</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessType` <a name="ResetAccessType" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetAccessType"></a>

```csharp
private void ResetAccessType()
```

##### `ResetAllowedClients` <a name="ResetAllowedClients" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetAllowedClients"></a>

```csharp
private void ResetAllowedClients()
```

##### `ResetHasRootAccess` <a name="ResetHasRootAccess" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetHasRootAccess"></a>

```csharp
private void ResetHasRootAccess()
```

##### `ResetKerberos5IReadOnly` <a name="ResetKerberos5IReadOnly" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadOnly"></a>

```csharp
private void ResetKerberos5IReadOnly()
```

##### `ResetKerberos5IReadWrite` <a name="ResetKerberos5IReadWrite" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadWrite"></a>

```csharp
private void ResetKerberos5IReadWrite()
```

##### `ResetKerberos5PReadOnly` <a name="ResetKerberos5PReadOnly" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadOnly"></a>

```csharp
private void ResetKerberos5PReadOnly()
```

##### `ResetKerberos5PReadWrite` <a name="ResetKerberos5PReadWrite" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadWrite"></a>

```csharp
private void ResetKerberos5PReadWrite()
```

##### `ResetKerberos5ReadOnly` <a name="ResetKerberos5ReadOnly" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadOnly"></a>

```csharp
private void ResetKerberos5ReadOnly()
```

##### `ResetKerberos5ReadWrite` <a name="ResetKerberos5ReadWrite" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadWrite"></a>

```csharp
private void ResetKerberos5ReadWrite()
```

##### `ResetNfsv3` <a name="ResetNfsv3" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetNfsv3"></a>

```csharp
private void ResetNfsv3()
```

##### `ResetNfsv4` <a name="ResetNfsv4" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetNfsv4"></a>

```csharp
private void ResetNfsv4()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.accessTypeInput">AccessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.allowedClientsInput">AllowedClientsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.hasRootAccessInput">HasRootAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnlyInput">Kerberos5IReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWriteInput">Kerberos5IReadWriteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnlyInput">Kerberos5PReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWriteInput">Kerberos5PReadWriteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnlyInput">Kerberos5ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWriteInput">Kerberos5ReadWriteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv3Input">Nfsv3Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv4Input">Nfsv4Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.accessType">AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.allowedClients">AllowedClients</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.hasRootAccess">HasRootAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnly">Kerberos5IReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWrite">Kerberos5IReadWrite</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnly">Kerberos5PReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWrite">Kerberos5PReadWrite</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnly">Kerberos5ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWrite">Kerberos5ReadWrite</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv3">Nfsv3</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv4">Nfsv4</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessTypeInput`<sup>Optional</sup> <a name="AccessTypeInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.accessTypeInput"></a>

```csharp
public string AccessTypeInput { get; }
```

- *Type:* string

---

##### `AllowedClientsInput`<sup>Optional</sup> <a name="AllowedClientsInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.allowedClientsInput"></a>

```csharp
public string AllowedClientsInput { get; }
```

- *Type:* string

---

##### `HasRootAccessInput`<sup>Optional</sup> <a name="HasRootAccessInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.hasRootAccessInput"></a>

```csharp
public string HasRootAccessInput { get; }
```

- *Type:* string

---

##### `Kerberos5IReadOnlyInput`<sup>Optional</sup> <a name="Kerberos5IReadOnlyInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnlyInput"></a>

```csharp
public object Kerberos5IReadOnlyInput { get; }
```

- *Type:* object

---

##### `Kerberos5IReadWriteInput`<sup>Optional</sup> <a name="Kerberos5IReadWriteInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWriteInput"></a>

```csharp
public object Kerberos5IReadWriteInput { get; }
```

- *Type:* object

---

##### `Kerberos5PReadOnlyInput`<sup>Optional</sup> <a name="Kerberos5PReadOnlyInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnlyInput"></a>

```csharp
public object Kerberos5PReadOnlyInput { get; }
```

- *Type:* object

---

##### `Kerberos5PReadWriteInput`<sup>Optional</sup> <a name="Kerberos5PReadWriteInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWriteInput"></a>

```csharp
public object Kerberos5PReadWriteInput { get; }
```

- *Type:* object

---

##### `Kerberos5ReadOnlyInput`<sup>Optional</sup> <a name="Kerberos5ReadOnlyInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnlyInput"></a>

```csharp
public object Kerberos5ReadOnlyInput { get; }
```

- *Type:* object

---

##### `Kerberos5ReadWriteInput`<sup>Optional</sup> <a name="Kerberos5ReadWriteInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWriteInput"></a>

```csharp
public object Kerberos5ReadWriteInput { get; }
```

- *Type:* object

---

##### `Nfsv3Input`<sup>Optional</sup> <a name="Nfsv3Input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv3Input"></a>

```csharp
public object Nfsv3Input { get; }
```

- *Type:* object

---

##### `Nfsv4Input`<sup>Optional</sup> <a name="Nfsv4Input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv4Input"></a>

```csharp
public object Nfsv4Input { get; }
```

- *Type:* object

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.accessType"></a>

```csharp
public string AccessType { get; }
```

- *Type:* string

---

##### `AllowedClients`<sup>Required</sup> <a name="AllowedClients" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.allowedClients"></a>

```csharp
public string AllowedClients { get; }
```

- *Type:* string

---

##### `HasRootAccess`<sup>Required</sup> <a name="HasRootAccess" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.hasRootAccess"></a>

```csharp
public string HasRootAccess { get; }
```

- *Type:* string

---

##### `Kerberos5IReadOnly`<sup>Required</sup> <a name="Kerberos5IReadOnly" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnly"></a>

```csharp
public object Kerberos5IReadOnly { get; }
```

- *Type:* object

---

##### `Kerberos5IReadWrite`<sup>Required</sup> <a name="Kerberos5IReadWrite" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWrite"></a>

```csharp
public object Kerberos5IReadWrite { get; }
```

- *Type:* object

---

##### `Kerberos5PReadOnly`<sup>Required</sup> <a name="Kerberos5PReadOnly" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnly"></a>

```csharp
public object Kerberos5PReadOnly { get; }
```

- *Type:* object

---

##### `Kerberos5PReadWrite`<sup>Required</sup> <a name="Kerberos5PReadWrite" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWrite"></a>

```csharp
public object Kerberos5PReadWrite { get; }
```

- *Type:* object

---

##### `Kerberos5ReadOnly`<sup>Required</sup> <a name="Kerberos5ReadOnly" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnly"></a>

```csharp
public object Kerberos5ReadOnly { get; }
```

- *Type:* object

---

##### `Kerberos5ReadWrite`<sup>Required</sup> <a name="Kerberos5ReadWrite" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWrite"></a>

```csharp
public object Kerberos5ReadWrite { get; }
```

- *Type:* object

---

##### `Nfsv3`<sup>Required</sup> <a name="Nfsv3" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv3"></a>

```csharp
public object Nfsv3 { get; }
```

- *Type:* object

---

##### `Nfsv4`<sup>Required</sup> <a name="Nfsv4" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv4"></a>

```csharp
public object Nfsv4 { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNetappVolumeMountOptionsList <a name="GoogleNetappVolumeMountOptionsList" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeMountOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.get"></a>

```csharp
private GoogleNetappVolumeMountOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleNetappVolumeMountOptionsOutputReference <a name="GoogleNetappVolumeMountOptionsOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeMountOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.export">Export</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.exportFull">ExportFull</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.instructions">Instructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptions">GoogleNetappVolumeMountOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Export`<sup>Required</sup> <a name="Export" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.export"></a>

```csharp
public string Export { get; }
```

- *Type:* string

---

##### `ExportFull`<sup>Required</sup> <a name="ExportFull" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.exportFull"></a>

```csharp
public string ExportFull { get; }
```

- *Type:* string

---

##### `Instructions`<sup>Required</sup> <a name="Instructions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.instructions"></a>

```csharp
public string Instructions { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleNetappVolumeMountOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptions">GoogleNetappVolumeMountOptions</a>

---


### GoogleNetappVolumeRestoreParametersOutputReference <a name="GoogleNetappVolumeRestoreParametersOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeRestoreParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resetSourceBackup">ResetSourceBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resetSourceSnapshot">ResetSourceSnapshot</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceBackup` <a name="ResetSourceBackup" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resetSourceBackup"></a>

```csharp
private void ResetSourceBackup()
```

##### `ResetSourceSnapshot` <a name="ResetSourceSnapshot" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resetSourceSnapshot"></a>

```csharp
private void ResetSourceSnapshot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceBackupInput">SourceBackupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceSnapshotInput">SourceSnapshotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceBackup">SourceBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceSnapshot">SourceSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceBackupInput`<sup>Optional</sup> <a name="SourceBackupInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceBackupInput"></a>

```csharp
public string SourceBackupInput { get; }
```

- *Type:* string

---

##### `SourceSnapshotInput`<sup>Optional</sup> <a name="SourceSnapshotInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceSnapshotInput"></a>

```csharp
public string SourceSnapshotInput { get; }
```

- *Type:* string

---

##### `SourceBackup`<sup>Required</sup> <a name="SourceBackup" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceBackup"></a>

```csharp
public string SourceBackup { get; }
```

- *Type:* string

---

##### `SourceSnapshot`<sup>Required</sup> <a name="SourceSnapshot" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceSnapshot"></a>

```csharp
public string SourceSnapshot { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.internalValue"></a>

```csharp
public GoogleNetappVolumeRestoreParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a>

---


### GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference <a name="GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetHour">ResetHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetMinute">ResetMinute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHour` <a name="ResetHour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetHour"></a>

```csharp
private void ResetHour()
```

##### `ResetMinute` <a name="ResetMinute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetMinute"></a>

```csharp
private void ResetMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hourInput">HourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minuteInput">MinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput">SnapshotsToKeepInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hour">Hour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minute">Minute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hourInput"></a>

```csharp
public double HourInput { get; }
```

- *Type:* double

---

##### `MinuteInput`<sup>Optional</sup> <a name="MinuteInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minuteInput"></a>

```csharp
public double MinuteInput { get; }
```

- *Type:* double

---

##### `SnapshotsToKeepInput`<sup>Optional</sup> <a name="SnapshotsToKeepInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```csharp
public double SnapshotsToKeepInput { get; }
```

- *Type:* double

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hour"></a>

```csharp
public double Hour { get; }
```

- *Type:* double

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minute"></a>

```csharp
public double Minute { get; }
```

- *Type:* double

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep"></a>

```csharp
public double SnapshotsToKeep { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.internalValue"></a>

```csharp
public GoogleNetappVolumeSnapshotPolicyDailySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a>

---


### GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference <a name="GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resetMinute">ResetMinute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinute` <a name="ResetMinute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resetMinute"></a>

```csharp
private void ResetMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput">MinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput">SnapshotsToKeepInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minute">Minute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinuteInput`<sup>Optional</sup> <a name="MinuteInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput"></a>

```csharp
public double MinuteInput { get; }
```

- *Type:* double

---

##### `SnapshotsToKeepInput`<sup>Optional</sup> <a name="SnapshotsToKeepInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```csharp
public double SnapshotsToKeepInput { get; }
```

- *Type:* double

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minute"></a>

```csharp
public double Minute { get; }
```

- *Type:* double

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep"></a>

```csharp
public double SnapshotsToKeep { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.internalValue"></a>

```csharp
public GoogleNetappVolumeSnapshotPolicyHourlySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a>

---


### GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference <a name="GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetDaysOfMonth">ResetDaysOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetHour">ResetHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetMinute">ResetMinute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysOfMonth` <a name="ResetDaysOfMonth" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetDaysOfMonth"></a>

```csharp
private void ResetDaysOfMonth()
```

##### `ResetHour` <a name="ResetHour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetHour"></a>

```csharp
private void ResetHour()
```

##### `ResetMinute` <a name="ResetMinute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetMinute"></a>

```csharp
private void ResetMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput">DaysOfMonthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput">HourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput">MinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput">SnapshotsToKeepInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth">DaysOfMonth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hour">Hour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minute">Minute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfMonthInput`<sup>Optional</sup> <a name="DaysOfMonthInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput"></a>

```csharp
public string DaysOfMonthInput { get; }
```

- *Type:* string

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput"></a>

```csharp
public double HourInput { get; }
```

- *Type:* double

---

##### `MinuteInput`<sup>Optional</sup> <a name="MinuteInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput"></a>

```csharp
public double MinuteInput { get; }
```

- *Type:* double

---

##### `SnapshotsToKeepInput`<sup>Optional</sup> <a name="SnapshotsToKeepInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```csharp
public double SnapshotsToKeepInput { get; }
```

- *Type:* double

---

##### `DaysOfMonth`<sup>Required</sup> <a name="DaysOfMonth" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth"></a>

```csharp
public string DaysOfMonth { get; }
```

- *Type:* string

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hour"></a>

```csharp
public double Hour { get; }
```

- *Type:* double

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minute"></a>

```csharp
public double Minute { get; }
```

- *Type:* double

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep"></a>

```csharp
public double SnapshotsToKeep { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue"></a>

```csharp
public GoogleNetappVolumeSnapshotPolicyMonthlySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a>

---


### GoogleNetappVolumeSnapshotPolicyOutputReference <a name="GoogleNetappVolumeSnapshotPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeSnapshotPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putDailySchedule">PutDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putHourlySchedule">PutHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule">PutMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule">PutWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetDailySchedule">ResetDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetHourlySchedule">ResetHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetMonthlySchedule">ResetMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetWeeklySchedule">ResetWeeklySchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDailySchedule` <a name="PutDailySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putDailySchedule"></a>

```csharp
private void PutDailySchedule(GoogleNetappVolumeSnapshotPolicyDailySchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putDailySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a>

---

##### `PutHourlySchedule` <a name="PutHourlySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putHourlySchedule"></a>

```csharp
private void PutHourlySchedule(GoogleNetappVolumeSnapshotPolicyHourlySchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putHourlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a>

---

##### `PutMonthlySchedule` <a name="PutMonthlySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule"></a>

```csharp
private void PutMonthlySchedule(GoogleNetappVolumeSnapshotPolicyMonthlySchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a>

---

##### `PutWeeklySchedule` <a name="PutWeeklySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule"></a>

```csharp
private void PutWeeklySchedule(GoogleNetappVolumeSnapshotPolicyWeeklySchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a>

---

##### `ResetDailySchedule` <a name="ResetDailySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetDailySchedule"></a>

```csharp
private void ResetDailySchedule()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetHourlySchedule` <a name="ResetHourlySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetHourlySchedule"></a>

```csharp
private void ResetHourlySchedule()
```

##### `ResetMonthlySchedule` <a name="ResetMonthlySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetMonthlySchedule"></a>

```csharp
private void ResetMonthlySchedule()
```

##### `ResetWeeklySchedule` <a name="ResetWeeklySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetWeeklySchedule"></a>

```csharp
private void ResetWeeklySchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.dailySchedule">DailySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.hourlySchedule">HourlySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.monthlySchedule">MonthlySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.dailyScheduleInput">DailyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.hourlyScheduleInput">HourlyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.monthlyScheduleInput">MonthlyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.weeklyScheduleInput">WeeklyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DailySchedule`<sup>Required</sup> <a name="DailySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.dailySchedule"></a>

```csharp
public GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference DailySchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference</a>

---

##### `HourlySchedule`<sup>Required</sup> <a name="HourlySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.hourlySchedule"></a>

```csharp
public GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference HourlySchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference</a>

---

##### `MonthlySchedule`<sup>Required</sup> <a name="MonthlySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.monthlySchedule"></a>

```csharp
public GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference MonthlySchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference</a>

---

##### `WeeklySchedule`<sup>Required</sup> <a name="WeeklySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.weeklySchedule"></a>

```csharp
public GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference WeeklySchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference</a>

---

##### `DailyScheduleInput`<sup>Optional</sup> <a name="DailyScheduleInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.dailyScheduleInput"></a>

```csharp
public GoogleNetappVolumeSnapshotPolicyDailySchedule DailyScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `HourlyScheduleInput`<sup>Optional</sup> <a name="HourlyScheduleInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.hourlyScheduleInput"></a>

```csharp
public GoogleNetappVolumeSnapshotPolicyHourlySchedule HourlyScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a>

---

##### `MonthlyScheduleInput`<sup>Optional</sup> <a name="MonthlyScheduleInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.monthlyScheduleInput"></a>

```csharp
public GoogleNetappVolumeSnapshotPolicyMonthlySchedule MonthlyScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a>

---

##### `WeeklyScheduleInput`<sup>Optional</sup> <a name="WeeklyScheduleInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.weeklyScheduleInput"></a>

```csharp
public GoogleNetappVolumeSnapshotPolicyWeeklySchedule WeeklyScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleNetappVolumeSnapshotPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a>

---


### GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference <a name="GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetHour">ResetHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetMinute">ResetMinute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetDay"></a>

```csharp
private void ResetDay()
```

##### `ResetHour` <a name="ResetHour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetHour"></a>

```csharp
private void ResetHour()
```

##### `ResetMinute` <a name="ResetMinute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetMinute"></a>

```csharp
private void ResetMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.dayInput">DayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput">HourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput">MinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput">SnapshotsToKeepInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.day">Day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hour">Hour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minute">Minute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.dayInput"></a>

```csharp
public string DayInput { get; }
```

- *Type:* string

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput"></a>

```csharp
public double HourInput { get; }
```

- *Type:* double

---

##### `MinuteInput`<sup>Optional</sup> <a name="MinuteInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput"></a>

```csharp
public double MinuteInput { get; }
```

- *Type:* double

---

##### `SnapshotsToKeepInput`<sup>Optional</sup> <a name="SnapshotsToKeepInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```csharp
public double SnapshotsToKeepInput { get; }
```

- *Type:* double

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.day"></a>

```csharp
public string Day { get; }
```

- *Type:* string

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hour"></a>

```csharp
public double Hour { get; }
```

- *Type:* double

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minute"></a>

```csharp
public double Minute { get; }
```

- *Type:* double

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep"></a>

```csharp
public double SnapshotsToKeep { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue"></a>

```csharp
public GoogleNetappVolumeSnapshotPolicyWeeklySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a>

---


### GoogleNetappVolumeTieringPolicyOutputReference <a name="GoogleNetappVolumeTieringPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeTieringPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resetCoolingThresholdDays">ResetCoolingThresholdDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resetTierAction">ResetTierAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCoolingThresholdDays` <a name="ResetCoolingThresholdDays" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resetCoolingThresholdDays"></a>

```csharp
private void ResetCoolingThresholdDays()
```

##### `ResetTierAction` <a name="ResetTierAction" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resetTierAction"></a>

```csharp
private void ResetTierAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.coolingThresholdDaysInput">CoolingThresholdDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.tierActionInput">TierActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.coolingThresholdDays">CoolingThresholdDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.tierAction">TierAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CoolingThresholdDaysInput`<sup>Optional</sup> <a name="CoolingThresholdDaysInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.coolingThresholdDaysInput"></a>

```csharp
public double CoolingThresholdDaysInput { get; }
```

- *Type:* double

---

##### `TierActionInput`<sup>Optional</sup> <a name="TierActionInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.tierActionInput"></a>

```csharp
public string TierActionInput { get; }
```

- *Type:* string

---

##### `CoolingThresholdDays`<sup>Required</sup> <a name="CoolingThresholdDays" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.coolingThresholdDays"></a>

```csharp
public double CoolingThresholdDays { get; }
```

- *Type:* double

---

##### `TierAction`<sup>Required</sup> <a name="TierAction" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.tierAction"></a>

```csharp
public string TierAction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleNetappVolumeTieringPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a>

---


### GoogleNetappVolumeTimeoutsOutputReference <a name="GoogleNetappVolumeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



