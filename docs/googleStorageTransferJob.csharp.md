# `googleStorageTransferJob` Submodule <a name="`googleStorageTransferJob` Submodule" id="@cdktf/provider-google-beta.googleStorageTransferJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageTransferJob <a name="GoogleStorageTransferJob" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job google_storage_transfer_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJob(Construct Scope, string Id, GoogleStorageTransferJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig">GoogleStorageTransferJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig">GoogleStorageTransferJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putEventStream">PutEventStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putNotificationConfig">PutNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putReplicationSpec">PutReplicationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putTransferSpec">PutTransferSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetEventStream">ResetEventStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetNotificationConfig">ResetNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetReplicationSpec">ResetReplicationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetTransferSpec">ResetTransferSpec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventStream` <a name="PutEventStream" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putEventStream"></a>

```csharp
private void PutEventStream(GoogleStorageTransferJobEventStream Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putEventStream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream">GoogleStorageTransferJobEventStream</a>

---

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putLoggingConfig"></a>

```csharp
private void PutLoggingConfig(GoogleStorageTransferJobLoggingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfig">GoogleStorageTransferJobLoggingConfig</a>

---

##### `PutNotificationConfig` <a name="PutNotificationConfig" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putNotificationConfig"></a>

```csharp
private void PutNotificationConfig(GoogleStorageTransferJobNotificationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig">GoogleStorageTransferJobNotificationConfig</a>

---

##### `PutReplicationSpec` <a name="PutReplicationSpec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putReplicationSpec"></a>

```csharp
private void PutReplicationSpec(GoogleStorageTransferJobReplicationSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putReplicationSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec">GoogleStorageTransferJobReplicationSpec</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putSchedule"></a>

```csharp
private void PutSchedule(GoogleStorageTransferJobSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule">GoogleStorageTransferJobSchedule</a>

---

##### `PutTransferSpec` <a name="PutTransferSpec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putTransferSpec"></a>

```csharp
private void PutTransferSpec(GoogleStorageTransferJobTransferSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putTransferSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec">GoogleStorageTransferJobTransferSpec</a>

---

##### `ResetEventStream` <a name="ResetEventStream" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetEventStream"></a>

```csharp
private void ResetEventStream()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetLoggingConfig"></a>

```csharp
private void ResetLoggingConfig()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNotificationConfig` <a name="ResetNotificationConfig" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetNotificationConfig"></a>

```csharp
private void ResetNotificationConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetReplicationSpec` <a name="ResetReplicationSpec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetReplicationSpec"></a>

```csharp
private void ResetReplicationSpec()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTransferSpec` <a name="ResetTransferSpec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetTransferSpec"></a>

```csharp
private void ResetTransferSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleStorageTransferJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageTransferJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageTransferJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageTransferJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageTransferJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleStorageTransferJob resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleStorageTransferJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleStorageTransferJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageTransferJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.deletionTime">DeletionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.eventStream">EventStream</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference">GoogleStorageTransferJobEventStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.lastModificationTime">LastModificationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference">GoogleStorageTransferJobLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference">GoogleStorageTransferJobNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.replicationSpec">ReplicationSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference">GoogleStorageTransferJobReplicationSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference">GoogleStorageTransferJobScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.transferSpec">TransferSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference">GoogleStorageTransferJobTransferSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.eventStreamInput">EventStreamInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream">GoogleStorageTransferJobEventStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfig">GoogleStorageTransferJobLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.notificationConfigInput">NotificationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig">GoogleStorageTransferJobNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.replicationSpecInput">ReplicationSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec">GoogleStorageTransferJobReplicationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule">GoogleStorageTransferJobSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.transferSpecInput">TransferSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec">GoogleStorageTransferJobTransferSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `DeletionTime`<sup>Required</sup> <a name="DeletionTime" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.deletionTime"></a>

```csharp
public string DeletionTime { get; }
```

- *Type:* string

---

##### `EventStream`<sup>Required</sup> <a name="EventStream" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.eventStream"></a>

```csharp
public GoogleStorageTransferJobEventStreamOutputReference EventStream { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference">GoogleStorageTransferJobEventStreamOutputReference</a>

---

##### `LastModificationTime`<sup>Required</sup> <a name="LastModificationTime" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.lastModificationTime"></a>

```csharp
public string LastModificationTime { get; }
```

- *Type:* string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.loggingConfig"></a>

```csharp
public GoogleStorageTransferJobLoggingConfigOutputReference LoggingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference">GoogleStorageTransferJobLoggingConfigOutputReference</a>

---

##### `NotificationConfig`<sup>Required</sup> <a name="NotificationConfig" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.notificationConfig"></a>

```csharp
public GoogleStorageTransferJobNotificationConfigOutputReference NotificationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference">GoogleStorageTransferJobNotificationConfigOutputReference</a>

---

##### `ReplicationSpec`<sup>Required</sup> <a name="ReplicationSpec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.replicationSpec"></a>

```csharp
public GoogleStorageTransferJobReplicationSpecOutputReference ReplicationSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference">GoogleStorageTransferJobReplicationSpecOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.schedule"></a>

```csharp
public GoogleStorageTransferJobScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference">GoogleStorageTransferJobScheduleOutputReference</a>

---

##### `TransferSpec`<sup>Required</sup> <a name="TransferSpec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.transferSpec"></a>

```csharp
public GoogleStorageTransferJobTransferSpecOutputReference TransferSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference">GoogleStorageTransferJobTransferSpecOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EventStreamInput`<sup>Optional</sup> <a name="EventStreamInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.eventStreamInput"></a>

```csharp
public GoogleStorageTransferJobEventStream EventStreamInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream">GoogleStorageTransferJobEventStream</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.loggingConfigInput"></a>

```csharp
public GoogleStorageTransferJobLoggingConfig LoggingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfig">GoogleStorageTransferJobLoggingConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationConfigInput`<sup>Optional</sup> <a name="NotificationConfigInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.notificationConfigInput"></a>

```csharp
public GoogleStorageTransferJobNotificationConfig NotificationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig">GoogleStorageTransferJobNotificationConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReplicationSpecInput`<sup>Optional</sup> <a name="ReplicationSpecInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.replicationSpecInput"></a>

```csharp
public GoogleStorageTransferJobReplicationSpec ReplicationSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec">GoogleStorageTransferJobReplicationSpec</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.scheduleInput"></a>

```csharp
public GoogleStorageTransferJobSchedule ScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule">GoogleStorageTransferJobSchedule</a>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TransferSpecInput`<sup>Optional</sup> <a name="TransferSpecInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.transferSpecInput"></a>

```csharp
public GoogleStorageTransferJobTransferSpec TransferSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec">GoogleStorageTransferJobTransferSpec</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageTransferJobConfig <a name="GoogleStorageTransferJobConfig" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Description,
    GoogleStorageTransferJobEventStream EventStream = null,
    string Id = null,
    GoogleStorageTransferJobLoggingConfig LoggingConfig = null,
    string Name = null,
    GoogleStorageTransferJobNotificationConfig NotificationConfig = null,
    string Project = null,
    GoogleStorageTransferJobReplicationSpec ReplicationSpec = null,
    GoogleStorageTransferJobSchedule Schedule = null,
    string Status = null,
    GoogleStorageTransferJobTransferSpec TransferSpec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.description">Description</a></code> | <code>string</code> | Unique description to identify the Transfer Job. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.eventStream">EventStream</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream">GoogleStorageTransferJobEventStream</a></code> | event_stream block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#id GoogleStorageTransferJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfig">GoogleStorageTransferJobLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.name">Name</a></code> | <code>string</code> | The name of the Transfer Job. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig">GoogleStorageTransferJobNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.project">Project</a></code> | <code>string</code> | The project in which the resource belongs. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.replicationSpec">ReplicationSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec">GoogleStorageTransferJobReplicationSpec</a></code> | replication_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule">GoogleStorageTransferJobSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.status">Status</a></code> | <code>string</code> | Status of the job. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.transferSpec">TransferSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec">GoogleStorageTransferJobTransferSpec</a></code> | transfer_spec block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Unique description to identify the Transfer Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#description GoogleStorageTransferJob#description}

---

##### `EventStream`<sup>Optional</sup> <a name="EventStream" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.eventStream"></a>

```csharp
public GoogleStorageTransferJobEventStream EventStream { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream">GoogleStorageTransferJobEventStream</a>

event_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#event_stream GoogleStorageTransferJob#event_stream}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#id GoogleStorageTransferJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.loggingConfig"></a>

```csharp
public GoogleStorageTransferJobLoggingConfig LoggingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfig">GoogleStorageTransferJobLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#logging_config GoogleStorageTransferJob#logging_config}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Transfer Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#name GoogleStorageTransferJob#name}

---

##### `NotificationConfig`<sup>Optional</sup> <a name="NotificationConfig" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.notificationConfig"></a>

```csharp
public GoogleStorageTransferJobNotificationConfig NotificationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig">GoogleStorageTransferJobNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#notification_config GoogleStorageTransferJob#notification_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project in which the resource belongs. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#project GoogleStorageTransferJob#project}

---

##### `ReplicationSpec`<sup>Optional</sup> <a name="ReplicationSpec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.replicationSpec"></a>

```csharp
public GoogleStorageTransferJobReplicationSpec ReplicationSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec">GoogleStorageTransferJobReplicationSpec</a>

replication_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#replication_spec GoogleStorageTransferJob#replication_spec}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.schedule"></a>

```csharp
public GoogleStorageTransferJobSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule">GoogleStorageTransferJobSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#schedule GoogleStorageTransferJob#schedule}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Status of the job.

Default: ENABLED. NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#status GoogleStorageTransferJob#status}

---

##### `TransferSpec`<sup>Optional</sup> <a name="TransferSpec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.transferSpec"></a>

```csharp
public GoogleStorageTransferJobTransferSpec TransferSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec">GoogleStorageTransferJobTransferSpec</a>

transfer_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#transfer_spec GoogleStorageTransferJob#transfer_spec}

---

### GoogleStorageTransferJobEventStream <a name="GoogleStorageTransferJobEventStream" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobEventStream {
    string Name,
    string EventStreamExpirationTime = null,
    string EventStreamStartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream.property.name">Name</a></code> | <code>string</code> | Specifies a unique name of the resource such as AWS SQS ARN in the form 'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form 'projects/{project}/subscriptions/{sub}'. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream.property.eventStreamExpirationTime">EventStreamExpirationTime</a></code> | <code>string</code> | Specifies the data and time at which Storage Transfer Service stops listening for events from this stream. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream.property.eventStreamStartTime">EventStreamStartTime</a></code> | <code>string</code> | Specifies the date and time that Storage Transfer Service starts listening for events from this stream. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies a unique name of the resource such as AWS SQS ARN in the form 'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form 'projects/{project}/subscriptions/{sub}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#name GoogleStorageTransferJob#name}

---

##### `EventStreamExpirationTime`<sup>Optional</sup> <a name="EventStreamExpirationTime" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream.property.eventStreamExpirationTime"></a>

```csharp
public string EventStreamExpirationTime { get; set; }
```

- *Type:* string

Specifies the data and time at which Storage Transfer Service stops listening for events from this stream.

After this time, any transfers in progress will complete, but no new transfers are initiated

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#event_stream_expiration_time GoogleStorageTransferJob#event_stream_expiration_time}

---

##### `EventStreamStartTime`<sup>Optional</sup> <a name="EventStreamStartTime" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream.property.eventStreamStartTime"></a>

```csharp
public string EventStreamStartTime { get; set; }
```

- *Type:* string

Specifies the date and time that Storage Transfer Service starts listening for events from this stream.

If no start time is specified or start time is in the past, Storage Transfer Service starts listening immediately

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#event_stream_start_time GoogleStorageTransferJob#event_stream_start_time}

---

### GoogleStorageTransferJobLoggingConfig <a name="GoogleStorageTransferJobLoggingConfig" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobLoggingConfig {
    object EnableOnPremGcsTransferLogs = null,
    string[] LogActions = null,
    string[] LogActionStates = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfig.property.enableOnPremGcsTransferLogs">EnableOnPremGcsTransferLogs</a></code> | <code>object</code> | For transfers with a PosixFilesystem source, this option enables the Cloud Storage transfer logs for this transfer. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfig.property.logActions">LogActions</a></code> | <code>string[]</code> | Specifies the actions to be logged. Not supported for transfers with PosifxFilesystem data sources; use enable_on_prem_gcs_transfer_logs instead. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfig.property.logActionStates">LogActionStates</a></code> | <code>string[]</code> | States in which logActions are logged. Not supported for transfers with PosifxFilesystem data sources; use enable_on_prem_gcs_transfer_logs instead. |

---

##### `EnableOnPremGcsTransferLogs`<sup>Optional</sup> <a name="EnableOnPremGcsTransferLogs" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfig.property.enableOnPremGcsTransferLogs"></a>

```csharp
public object EnableOnPremGcsTransferLogs { get; set; }
```

- *Type:* object

For transfers with a PosixFilesystem source, this option enables the Cloud Storage transfer logs for this transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#enable_on_prem_gcs_transfer_logs GoogleStorageTransferJob#enable_on_prem_gcs_transfer_logs}

---

##### `LogActions`<sup>Optional</sup> <a name="LogActions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfig.property.logActions"></a>

```csharp
public string[] LogActions { get; set; }
```

- *Type:* string[]

Specifies the actions to be logged. Not supported for transfers with PosifxFilesystem data sources; use enable_on_prem_gcs_transfer_logs instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#log_actions GoogleStorageTransferJob#log_actions}

---

##### `LogActionStates`<sup>Optional</sup> <a name="LogActionStates" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfig.property.logActionStates"></a>

```csharp
public string[] LogActionStates { get; set; }
```

- *Type:* string[]

States in which logActions are logged. Not supported for transfers with PosifxFilesystem data sources; use enable_on_prem_gcs_transfer_logs instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#log_action_states GoogleStorageTransferJob#log_action_states}

---

### GoogleStorageTransferJobNotificationConfig <a name="GoogleStorageTransferJobNotificationConfig" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobNotificationConfig {
    string PayloadFormat,
    string PubsubTopic,
    string[] EventTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig.property.payloadFormat">PayloadFormat</a></code> | <code>string</code> | The desired format of the notification message payloads. One of "NONE" or "JSON". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | The Topic.name of the Pub/Sub topic to which to publish notifications. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig.property.eventTypes">EventTypes</a></code> | <code>string[]</code> | Event types for which a notification is desired. |

---

##### `PayloadFormat`<sup>Required</sup> <a name="PayloadFormat" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig.property.payloadFormat"></a>

```csharp
public string PayloadFormat { get; set; }
```

- *Type:* string

The desired format of the notification message payloads. One of "NONE" or "JSON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#payload_format GoogleStorageTransferJob#payload_format}

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; set; }
```

- *Type:* string

The Topic.name of the Pub/Sub topic to which to publish notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#pubsub_topic GoogleStorageTransferJob#pubsub_topic}

---

##### `EventTypes`<sup>Optional</sup> <a name="EventTypes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig.property.eventTypes"></a>

```csharp
public string[] EventTypes { get; set; }
```

- *Type:* string[]

Event types for which a notification is desired.

If empty, send notifications for all event types. The valid types are "TRANSFER_OPERATION_SUCCESS", "TRANSFER_OPERATION_FAILED", "TRANSFER_OPERATION_ABORTED".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#event_types GoogleStorageTransferJob#event_types}

---

### GoogleStorageTransferJobReplicationSpec <a name="GoogleStorageTransferJobReplicationSpec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobReplicationSpec {
    GoogleStorageTransferJobReplicationSpecGcsDataSink GcsDataSink = null,
    GoogleStorageTransferJobReplicationSpecGcsDataSource GcsDataSource = null,
    GoogleStorageTransferJobReplicationSpecObjectConditions ObjectConditions = null,
    GoogleStorageTransferJobReplicationSpecTransferOptions TransferOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.gcsDataSink">GcsDataSink</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink">GoogleStorageTransferJobReplicationSpecGcsDataSink</a></code> | gcs_data_sink block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.gcsDataSource">GcsDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource">GoogleStorageTransferJobReplicationSpecGcsDataSource</a></code> | gcs_data_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.objectConditions">ObjectConditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions">GoogleStorageTransferJobReplicationSpecObjectConditions</a></code> | object_conditions block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.transferOptions">TransferOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions">GoogleStorageTransferJobReplicationSpecTransferOptions</a></code> | transfer_options block. |

---

##### `GcsDataSink`<sup>Optional</sup> <a name="GcsDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.gcsDataSink"></a>

```csharp
public GoogleStorageTransferJobReplicationSpecGcsDataSink GcsDataSink { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink">GoogleStorageTransferJobReplicationSpecGcsDataSink</a>

gcs_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#gcs_data_sink GoogleStorageTransferJob#gcs_data_sink}

---

##### `GcsDataSource`<sup>Optional</sup> <a name="GcsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.gcsDataSource"></a>

```csharp
public GoogleStorageTransferJobReplicationSpecGcsDataSource GcsDataSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource">GoogleStorageTransferJobReplicationSpecGcsDataSource</a>

gcs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#gcs_data_source GoogleStorageTransferJob#gcs_data_source}

---

##### `ObjectConditions`<sup>Optional</sup> <a name="ObjectConditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.objectConditions"></a>

```csharp
public GoogleStorageTransferJobReplicationSpecObjectConditions ObjectConditions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions">GoogleStorageTransferJobReplicationSpecObjectConditions</a>

object_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#object_conditions GoogleStorageTransferJob#object_conditions}

---

##### `TransferOptions`<sup>Optional</sup> <a name="TransferOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.transferOptions"></a>

```csharp
public GoogleStorageTransferJobReplicationSpecTransferOptions TransferOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions">GoogleStorageTransferJobReplicationSpecTransferOptions</a>

transfer_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#transfer_options GoogleStorageTransferJob#transfer_options}

---

### GoogleStorageTransferJobReplicationSpecGcsDataSink <a name="GoogleStorageTransferJobReplicationSpecGcsDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobReplicationSpecGcsDataSink {
    string BucketName,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink.property.bucketName">BucketName</a></code> | <code>string</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink.property.path">Path</a></code> | <code>string</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#bucket_name GoogleStorageTransferJob#bucket_name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

### GoogleStorageTransferJobReplicationSpecGcsDataSource <a name="GoogleStorageTransferJobReplicationSpecGcsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobReplicationSpecGcsDataSource {
    string BucketName,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource.property.bucketName">BucketName</a></code> | <code>string</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource.property.path">Path</a></code> | <code>string</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#bucket_name GoogleStorageTransferJob#bucket_name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

### GoogleStorageTransferJobReplicationSpecObjectConditions <a name="GoogleStorageTransferJobReplicationSpecObjectConditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobReplicationSpecObjectConditions {
    string[] ExcludePrefixes = null,
    string[] IncludePrefixes = null,
    string LastModifiedBefore = null,
    string LastModifiedSince = null,
    string MaxTimeElapsedSinceLastModification = null,
    string MinTimeElapsedSinceLastModification = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.excludePrefixes">ExcludePrefixes</a></code> | <code>string[]</code> | exclude_prefixes must follow the requirements described for include_prefixes. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.includePrefixes">IncludePrefixes</a></code> | <code>string[]</code> | If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.lastModifiedBefore">LastModifiedBefore</a></code> | <code>string</code> | If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.lastModifiedSince">LastModifiedSince</a></code> | <code>string</code> | If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.maxTimeElapsedSinceLastModification">MaxTimeElapsedSinceLastModification</a></code> | <code>string</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.minTimeElapsedSinceLastModification">MinTimeElapsedSinceLastModification</a></code> | <code>string</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |

---

##### `ExcludePrefixes`<sup>Optional</sup> <a name="ExcludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.excludePrefixes"></a>

```csharp
public string[] ExcludePrefixes { get; set; }
```

- *Type:* string[]

exclude_prefixes must follow the requirements described for include_prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#exclude_prefixes GoogleStorageTransferJob#exclude_prefixes}

---

##### `IncludePrefixes`<sup>Optional</sup> <a name="IncludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.includePrefixes"></a>

```csharp
public string[] IncludePrefixes { get; set; }
```

- *Type:* string[]

If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes.

If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#include_prefixes GoogleStorageTransferJob#include_prefixes}

---

##### `LastModifiedBefore`<sup>Optional</sup> <a name="LastModifiedBefore" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.lastModifiedBefore"></a>

```csharp
public string LastModifiedBefore { get; set; }
```

- *Type:* string

If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#last_modified_before GoogleStorageTransferJob#last_modified_before}

---

##### `LastModifiedSince`<sup>Optional</sup> <a name="LastModifiedSince" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.lastModifiedSince"></a>

```csharp
public string LastModifiedSince { get; set; }
```

- *Type:* string

If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#last_modified_since GoogleStorageTransferJob#last_modified_since}

---

##### `MaxTimeElapsedSinceLastModification`<sup>Optional</sup> <a name="MaxTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.maxTimeElapsedSinceLastModification"></a>

```csharp
public string MaxTimeElapsedSinceLastModification { get; set; }
```

- *Type:* string

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#max_time_elapsed_since_last_modification GoogleStorageTransferJob#max_time_elapsed_since_last_modification}

---

##### `MinTimeElapsedSinceLastModification`<sup>Optional</sup> <a name="MinTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.minTimeElapsedSinceLastModification"></a>

```csharp
public string MinTimeElapsedSinceLastModification { get; set; }
```

- *Type:* string

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#min_time_elapsed_since_last_modification GoogleStorageTransferJob#min_time_elapsed_since_last_modification}

---

### GoogleStorageTransferJobReplicationSpecTransferOptions <a name="GoogleStorageTransferJobReplicationSpecTransferOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobReplicationSpecTransferOptions {
    object DeleteObjectsFromSourceAfterTransfer = null,
    object DeleteObjectsUniqueInSink = null,
    GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions MetadataOptions = null,
    object OverwriteObjectsAlreadyExistingInSink = null,
    string OverwriteWhen = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer">DeleteObjectsFromSourceAfterTransfer</a></code> | <code>object</code> | Whether objects should be deleted from the source after they are transferred to the sink. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsUniqueInSink">DeleteObjectsUniqueInSink</a></code> | <code>object</code> | Whether objects that exist only in the sink should be deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions">GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink">OverwriteObjectsAlreadyExistingInSink</a></code> | <code>object</code> | Whether overwriting objects that already exist in the sink is allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.overwriteWhen">OverwriteWhen</a></code> | <code>string</code> | When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink. |

---

##### `DeleteObjectsFromSourceAfterTransfer`<sup>Optional</sup> <a name="DeleteObjectsFromSourceAfterTransfer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer"></a>

```csharp
public object DeleteObjectsFromSourceAfterTransfer { get; set; }
```

- *Type:* object

Whether objects should be deleted from the source after they are transferred to the sink.

Note that this option and delete_objects_unique_in_sink are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#delete_objects_from_source_after_transfer GoogleStorageTransferJob#delete_objects_from_source_after_transfer}

---

##### `DeleteObjectsUniqueInSink`<sup>Optional</sup> <a name="DeleteObjectsUniqueInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsUniqueInSink"></a>

```csharp
public object DeleteObjectsUniqueInSink { get; set; }
```

- *Type:* object

Whether objects that exist only in the sink should be deleted.

Note that this option and delete_objects_from_source_after_transfer are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#delete_objects_unique_in_sink GoogleStorageTransferJob#delete_objects_unique_in_sink}

---

##### `MetadataOptions`<sup>Optional</sup> <a name="MetadataOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.metadataOptions"></a>

```csharp
public GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions MetadataOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions">GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#metadata_options GoogleStorageTransferJob#metadata_options}

---

##### `OverwriteObjectsAlreadyExistingInSink`<sup>Optional</sup> <a name="OverwriteObjectsAlreadyExistingInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink"></a>

```csharp
public object OverwriteObjectsAlreadyExistingInSink { get; set; }
```

- *Type:* object

Whether overwriting objects that already exist in the sink is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#overwrite_objects_already_existing_in_sink GoogleStorageTransferJob#overwrite_objects_already_existing_in_sink}

---

##### `OverwriteWhen`<sup>Optional</sup> <a name="OverwriteWhen" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.overwriteWhen"></a>

```csharp
public string OverwriteWhen { get; set; }
```

- *Type:* string

When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#overwrite_when GoogleStorageTransferJob#overwrite_when}

---

### GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions <a name="GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions {
    string Acl = null,
    string Gid = null,
    string KmsKey = null,
    string Mode = null,
    string StorageClass = null,
    string Symlink = null,
    string TemporaryHold = null,
    string TimeCreated = null,
    string Uid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.acl">Acl</a></code> | <code>string</code> | Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.gid">Gid</a></code> | <code>string</code> | Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.kmsKey">KmsKey</a></code> | <code>string</code> | Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.mode">Mode</a></code> | <code>string</code> | Specifies how each file's mode attribute should be handled by the transfer. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.storageClass">StorageClass</a></code> | <code>string</code> | Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.symlink">Symlink</a></code> | <code>string</code> | Specifies how symlinks should be handled by the transfer. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.temporaryHold">TemporaryHold</a></code> | <code>string</code> | SSpecifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.timeCreated">TimeCreated</a></code> | <code>string</code> | Specifies how each object's timeCreated metadata is preserved for transfers. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.uid">Uid</a></code> | <code>string</code> | Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer. |

---

##### `Acl`<sup>Optional</sup> <a name="Acl" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.acl"></a>

```csharp
public string Acl { get; set; }
```

- *Type:* string

Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#acl GoogleStorageTransferJob#acl}

---

##### `Gid`<sup>Optional</sup> <a name="Gid" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.gid"></a>

```csharp
public string Gid { get; set; }
```

- *Type:* string

Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#gid GoogleStorageTransferJob#gid}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#kms_key GoogleStorageTransferJob#kms_key}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Specifies how each file's mode attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#mode GoogleStorageTransferJob#mode}

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#storage_class GoogleStorageTransferJob#storage_class}

---

##### `Symlink`<sup>Optional</sup> <a name="Symlink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.symlink"></a>

```csharp
public string Symlink { get; set; }
```

- *Type:* string

Specifies how symlinks should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#symlink GoogleStorageTransferJob#symlink}

---

##### `TemporaryHold`<sup>Optional</sup> <a name="TemporaryHold" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.temporaryHold"></a>

```csharp
public string TemporaryHold { get; set; }
```

- *Type:* string

SSpecifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#temporary_hold GoogleStorageTransferJob#temporary_hold}

---

##### `TimeCreated`<sup>Optional</sup> <a name="TimeCreated" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.timeCreated"></a>

```csharp
public string TimeCreated { get; set; }
```

- *Type:* string

Specifies how each object's timeCreated metadata is preserved for transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#time_created GoogleStorageTransferJob#time_created}

---

##### `Uid`<sup>Optional</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.uid"></a>

```csharp
public string Uid { get; set; }
```

- *Type:* string

Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#uid GoogleStorageTransferJob#uid}

---

### GoogleStorageTransferJobSchedule <a name="GoogleStorageTransferJobSchedule" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobSchedule {
    GoogleStorageTransferJobScheduleScheduleStartDate ScheduleStartDate,
    string RepeatInterval = null,
    GoogleStorageTransferJobScheduleScheduleEndDate ScheduleEndDate = null,
    GoogleStorageTransferJobScheduleStartTimeOfDay StartTimeOfDay = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.scheduleStartDate">ScheduleStartDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate">GoogleStorageTransferJobScheduleScheduleStartDate</a></code> | schedule_start_date block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.repeatInterval">RepeatInterval</a></code> | <code>string</code> | Interval between the start of each scheduled transfer. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.scheduleEndDate">ScheduleEndDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate">GoogleStorageTransferJobScheduleScheduleEndDate</a></code> | schedule_end_date block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.startTimeOfDay">StartTimeOfDay</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay">GoogleStorageTransferJobScheduleStartTimeOfDay</a></code> | start_time_of_day block. |

---

##### `ScheduleStartDate`<sup>Required</sup> <a name="ScheduleStartDate" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.scheduleStartDate"></a>

```csharp
public GoogleStorageTransferJobScheduleScheduleStartDate ScheduleStartDate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate">GoogleStorageTransferJobScheduleScheduleStartDate</a>

schedule_start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#schedule_start_date GoogleStorageTransferJob#schedule_start_date}

---

##### `RepeatInterval`<sup>Optional</sup> <a name="RepeatInterval" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.repeatInterval"></a>

```csharp
public string RepeatInterval { get; set; }
```

- *Type:* string

Interval between the start of each scheduled transfer.

If unspecified, the default value is 24 hours. This value may not be less than 1 hour. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#repeat_interval GoogleStorageTransferJob#repeat_interval}

---

##### `ScheduleEndDate`<sup>Optional</sup> <a name="ScheduleEndDate" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.scheduleEndDate"></a>

```csharp
public GoogleStorageTransferJobScheduleScheduleEndDate ScheduleEndDate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate">GoogleStorageTransferJobScheduleScheduleEndDate</a>

schedule_end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#schedule_end_date GoogleStorageTransferJob#schedule_end_date}

---

##### `StartTimeOfDay`<sup>Optional</sup> <a name="StartTimeOfDay" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.startTimeOfDay"></a>

```csharp
public GoogleStorageTransferJobScheduleStartTimeOfDay StartTimeOfDay { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay">GoogleStorageTransferJobScheduleStartTimeOfDay</a>

start_time_of_day block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#start_time_of_day GoogleStorageTransferJob#start_time_of_day}

---

### GoogleStorageTransferJobScheduleScheduleEndDate <a name="GoogleStorageTransferJobScheduleScheduleEndDate" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobScheduleScheduleEndDate {
    double Day,
    double Month,
    double Year
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate.property.day">Day</a></code> | <code>double</code> | Day of month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate.property.month">Month</a></code> | <code>double</code> | Month of year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate.property.year">Year</a></code> | <code>double</code> | Year of date. Must be from 1 to 9999. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate.property.day"></a>

```csharp
public double Day { get; set; }
```

- *Type:* double

Day of month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#day GoogleStorageTransferJob#day}

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate.property.month"></a>

```csharp
public double Month { get; set; }
```

- *Type:* double

Month of year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#month GoogleStorageTransferJob#month}

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate.property.year"></a>

```csharp
public double Year { get; set; }
```

- *Type:* double

Year of date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#year GoogleStorageTransferJob#year}

---

### GoogleStorageTransferJobScheduleScheduleStartDate <a name="GoogleStorageTransferJobScheduleScheduleStartDate" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobScheduleScheduleStartDate {
    double Day,
    double Month,
    double Year
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate.property.day">Day</a></code> | <code>double</code> | Day of month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate.property.month">Month</a></code> | <code>double</code> | Month of year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate.property.year">Year</a></code> | <code>double</code> | Year of date. Must be from 1 to 9999. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate.property.day"></a>

```csharp
public double Day { get; set; }
```

- *Type:* double

Day of month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#day GoogleStorageTransferJob#day}

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate.property.month"></a>

```csharp
public double Month { get; set; }
```

- *Type:* double

Month of year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#month GoogleStorageTransferJob#month}

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate.property.year"></a>

```csharp
public double Year { get; set; }
```

- *Type:* double

Year of date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#year GoogleStorageTransferJob#year}

---

### GoogleStorageTransferJobScheduleStartTimeOfDay <a name="GoogleStorageTransferJobScheduleStartTimeOfDay" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobScheduleStartTimeOfDay {
    double Hours,
    double Minutes,
    double Nanos,
    double Seconds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.hours">Hours</a></code> | <code>double</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.minutes">Minutes</a></code> | <code>double</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.nanos">Nanos</a></code> | <code>double</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.seconds">Seconds</a></code> | <code>double</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#hours GoogleStorageTransferJob#hours}

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#minutes GoogleStorageTransferJob#minutes}

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#nanos GoogleStorageTransferJob#nanos}

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#seconds GoogleStorageTransferJob#seconds}

---

### GoogleStorageTransferJobTransferSpec <a name="GoogleStorageTransferJobTransferSpec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpec {
    GoogleStorageTransferJobTransferSpecAwsS3DataSource AwsS3DataSource = null,
    GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource AzureBlobStorageDataSource = null,
    GoogleStorageTransferJobTransferSpecGcsDataSink GcsDataSink = null,
    GoogleStorageTransferJobTransferSpecGcsDataSource GcsDataSource = null,
    GoogleStorageTransferJobTransferSpecHdfsDataSource HdfsDataSource = null,
    GoogleStorageTransferJobTransferSpecHttpDataSource HttpDataSource = null,
    GoogleStorageTransferJobTransferSpecObjectConditions ObjectConditions = null,
    GoogleStorageTransferJobTransferSpecPosixDataSink PosixDataSink = null,
    GoogleStorageTransferJobTransferSpecPosixDataSource PosixDataSource = null,
    string SinkAgentPoolName = null,
    string SourceAgentPoolName = null,
    GoogleStorageTransferJobTransferSpecTransferOptions TransferOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.awsS3DataSource">AwsS3DataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource">GoogleStorageTransferJobTransferSpecAwsS3DataSource</a></code> | aws_s3_data_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.azureBlobStorageDataSource">AzureBlobStorageDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource</a></code> | azure_blob_storage_data_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.gcsDataSink">GcsDataSink</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink">GoogleStorageTransferJobTransferSpecGcsDataSink</a></code> | gcs_data_sink block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.gcsDataSource">GcsDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource">GoogleStorageTransferJobTransferSpecGcsDataSource</a></code> | gcs_data_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.hdfsDataSource">HdfsDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource">GoogleStorageTransferJobTransferSpecHdfsDataSource</a></code> | hdfs_data_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.httpDataSource">HttpDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource">GoogleStorageTransferJobTransferSpecHttpDataSource</a></code> | http_data_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.objectConditions">ObjectConditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions">GoogleStorageTransferJobTransferSpecObjectConditions</a></code> | object_conditions block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.posixDataSink">PosixDataSink</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink">GoogleStorageTransferJobTransferSpecPosixDataSink</a></code> | posix_data_sink block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.posixDataSource">PosixDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource">GoogleStorageTransferJobTransferSpecPosixDataSource</a></code> | posix_data_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.sinkAgentPoolName">SinkAgentPoolName</a></code> | <code>string</code> | Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.sourceAgentPoolName">SourceAgentPoolName</a></code> | <code>string</code> | Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.transferOptions">TransferOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions">GoogleStorageTransferJobTransferSpecTransferOptions</a></code> | transfer_options block. |

---

##### `AwsS3DataSource`<sup>Optional</sup> <a name="AwsS3DataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.awsS3DataSource"></a>

```csharp
public GoogleStorageTransferJobTransferSpecAwsS3DataSource AwsS3DataSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource">GoogleStorageTransferJobTransferSpecAwsS3DataSource</a>

aws_s3_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#aws_s3_data_source GoogleStorageTransferJob#aws_s3_data_source}

---

##### `AzureBlobStorageDataSource`<sup>Optional</sup> <a name="AzureBlobStorageDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.azureBlobStorageDataSource"></a>

```csharp
public GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource AzureBlobStorageDataSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

azure_blob_storage_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#azure_blob_storage_data_source GoogleStorageTransferJob#azure_blob_storage_data_source}

---

##### `GcsDataSink`<sup>Optional</sup> <a name="GcsDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.gcsDataSink"></a>

```csharp
public GoogleStorageTransferJobTransferSpecGcsDataSink GcsDataSink { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink">GoogleStorageTransferJobTransferSpecGcsDataSink</a>

gcs_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#gcs_data_sink GoogleStorageTransferJob#gcs_data_sink}

---

##### `GcsDataSource`<sup>Optional</sup> <a name="GcsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.gcsDataSource"></a>

```csharp
public GoogleStorageTransferJobTransferSpecGcsDataSource GcsDataSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource">GoogleStorageTransferJobTransferSpecGcsDataSource</a>

gcs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#gcs_data_source GoogleStorageTransferJob#gcs_data_source}

---

##### `HdfsDataSource`<sup>Optional</sup> <a name="HdfsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.hdfsDataSource"></a>

```csharp
public GoogleStorageTransferJobTransferSpecHdfsDataSource HdfsDataSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource">GoogleStorageTransferJobTransferSpecHdfsDataSource</a>

hdfs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#hdfs_data_source GoogleStorageTransferJob#hdfs_data_source}

---

##### `HttpDataSource`<sup>Optional</sup> <a name="HttpDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.httpDataSource"></a>

```csharp
public GoogleStorageTransferJobTransferSpecHttpDataSource HttpDataSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource">GoogleStorageTransferJobTransferSpecHttpDataSource</a>

http_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#http_data_source GoogleStorageTransferJob#http_data_source}

---

##### `ObjectConditions`<sup>Optional</sup> <a name="ObjectConditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.objectConditions"></a>

```csharp
public GoogleStorageTransferJobTransferSpecObjectConditions ObjectConditions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions">GoogleStorageTransferJobTransferSpecObjectConditions</a>

object_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#object_conditions GoogleStorageTransferJob#object_conditions}

---

##### `PosixDataSink`<sup>Optional</sup> <a name="PosixDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.posixDataSink"></a>

```csharp
public GoogleStorageTransferJobTransferSpecPosixDataSink PosixDataSink { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink">GoogleStorageTransferJobTransferSpecPosixDataSink</a>

posix_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#posix_data_sink GoogleStorageTransferJob#posix_data_sink}

---

##### `PosixDataSource`<sup>Optional</sup> <a name="PosixDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.posixDataSource"></a>

```csharp
public GoogleStorageTransferJobTransferSpecPosixDataSource PosixDataSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource">GoogleStorageTransferJobTransferSpecPosixDataSource</a>

posix_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#posix_data_source GoogleStorageTransferJob#posix_data_source}

---

##### `SinkAgentPoolName`<sup>Optional</sup> <a name="SinkAgentPoolName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.sinkAgentPoolName"></a>

```csharp
public string SinkAgentPoolName { get; set; }
```

- *Type:* string

Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#sink_agent_pool_name GoogleStorageTransferJob#sink_agent_pool_name}

---

##### `SourceAgentPoolName`<sup>Optional</sup> <a name="SourceAgentPoolName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.sourceAgentPoolName"></a>

```csharp
public string SourceAgentPoolName { get; set; }
```

- *Type:* string

Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#source_agent_pool_name GoogleStorageTransferJob#source_agent_pool_name}

---

##### `TransferOptions`<sup>Optional</sup> <a name="TransferOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.transferOptions"></a>

```csharp
public GoogleStorageTransferJobTransferSpecTransferOptions TransferOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions">GoogleStorageTransferJobTransferSpecTransferOptions</a>

transfer_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#transfer_options GoogleStorageTransferJob#transfer_options}

---

### GoogleStorageTransferJobTransferSpecAwsS3DataSource <a name="GoogleStorageTransferJobTransferSpecAwsS3DataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecAwsS3DataSource {
    string BucketName,
    GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey AwsAccessKey = null,
    object ManagedPrivateNetwork = null,
    string Path = null,
    string RoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.bucketName">BucketName</a></code> | <code>string</code> | S3 Bucket name. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.awsAccessKey">AwsAccessKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a></code> | aws_access_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.managedPrivateNetwork">ManagedPrivateNetwork</a></code> | <code>object</code> | Egress bytes over a Google-managed private network. This network is shared between other users of Storage Transfer Service. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.path">Path</a></code> | <code>string</code> | S3 Bucket path in bucket to transfer. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.roleArn">RoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the role to support temporary credentials via 'AssumeRoleWithWebIdentity'. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

S3 Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#bucket_name GoogleStorageTransferJob#bucket_name}

---

##### `AwsAccessKey`<sup>Optional</sup> <a name="AwsAccessKey" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.awsAccessKey"></a>

```csharp
public GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey AwsAccessKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

aws_access_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#aws_access_key GoogleStorageTransferJob#aws_access_key}

---

##### `ManagedPrivateNetwork`<sup>Optional</sup> <a name="ManagedPrivateNetwork" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.managedPrivateNetwork"></a>

```csharp
public object ManagedPrivateNetwork { get; set; }
```

- *Type:* object

Egress bytes over a Google-managed private network. This network is shared between other users of Storage Transfer Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#managed_private_network GoogleStorageTransferJob#managed_private_network}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

S3 Bucket path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the role to support temporary credentials via 'AssumeRoleWithWebIdentity'.

For more information about ARNs, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns). When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a 'AssumeRoleWithWebIdentity' call for the provided role using the [GoogleServiceAccount][] for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#role_arn GoogleStorageTransferJob#role_arn}

---

### GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey <a name="GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey {
    string AccessKeyId,
    string SecretAccessKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | AWS Key ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | AWS Secret Access Key. |

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; set; }
```

- *Type:* string

AWS Key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#access_key_id GoogleStorageTransferJob#access_key_id}

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; set; }
```

- *Type:* string

AWS Secret Access Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#secret_access_key GoogleStorageTransferJob#secret_access_key}

---

### GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource <a name="GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource {
    string Container,
    string StorageAccount,
    GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials AzureCredentials = null,
    string CredentialsSecret = null,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.container">Container</a></code> | <code>string</code> | The container to transfer from the Azure Storage account. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.storageAccount">StorageAccount</a></code> | <code>string</code> | The name of the Azure Storage account. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.azureCredentials">AzureCredentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a></code> | azure_credentials block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.credentialsSecret">CredentialsSecret</a></code> | <code>string</code> | The Resource name of a secret in Secret Manager containing SAS Credentials in JSON form. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.path">Path</a></code> | <code>string</code> | Root path to transfer objects. |

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.container"></a>

```csharp
public string Container { get; set; }
```

- *Type:* string

The container to transfer from the Azure Storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#container GoogleStorageTransferJob#container}

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.storageAccount"></a>

```csharp
public string StorageAccount { get; set; }
```

- *Type:* string

The name of the Azure Storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#storage_account GoogleStorageTransferJob#storage_account}

---

##### `AzureCredentials`<sup>Optional</sup> <a name="AzureCredentials" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.azureCredentials"></a>

```csharp
public GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials AzureCredentials { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

azure_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#azure_credentials GoogleStorageTransferJob#azure_credentials}

---

##### `CredentialsSecret`<sup>Optional</sup> <a name="CredentialsSecret" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.credentialsSecret"></a>

```csharp
public string CredentialsSecret { get; set; }
```

- *Type:* string

The Resource name of a secret in Secret Manager containing SAS Credentials in JSON form.

Service Agent must have permissions to access secret. If credentials_secret is specified, do not specify azure_credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#credentials_secret GoogleStorageTransferJob#credentials_secret}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Root path to transfer objects.

Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

### GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials <a name="GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials {
    string SasToken
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials.property.sasToken">SasToken</a></code> | <code>string</code> | Azure shared access signature. |

---

##### `SasToken`<sup>Required</sup> <a name="SasToken" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials.property.sasToken"></a>

```csharp
public string SasToken { get; set; }
```

- *Type:* string

Azure shared access signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#sas_token GoogleStorageTransferJob#sas_token}

---

### GoogleStorageTransferJobTransferSpecGcsDataSink <a name="GoogleStorageTransferJobTransferSpecGcsDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecGcsDataSink {
    string BucketName,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink.property.bucketName">BucketName</a></code> | <code>string</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink.property.path">Path</a></code> | <code>string</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#bucket_name GoogleStorageTransferJob#bucket_name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

### GoogleStorageTransferJobTransferSpecGcsDataSource <a name="GoogleStorageTransferJobTransferSpecGcsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecGcsDataSource {
    string BucketName,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource.property.bucketName">BucketName</a></code> | <code>string</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource.property.path">Path</a></code> | <code>string</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#bucket_name GoogleStorageTransferJob#bucket_name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

### GoogleStorageTransferJobTransferSpecHdfsDataSource <a name="GoogleStorageTransferJobTransferSpecHdfsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecHdfsDataSource {
    string Path
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource.property.path">Path</a></code> | <code>string</code> | Directory path to the filesystem. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

### GoogleStorageTransferJobTransferSpecHttpDataSource <a name="GoogleStorageTransferJobTransferSpecHttpDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecHttpDataSource {
    string ListUrl
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource.property.listUrl">ListUrl</a></code> | <code>string</code> | The URL that points to the file that stores the object list entries. |

---

##### `ListUrl`<sup>Required</sup> <a name="ListUrl" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource.property.listUrl"></a>

```csharp
public string ListUrl { get; set; }
```

- *Type:* string

The URL that points to the file that stores the object list entries.

This file must allow public access. Currently, only URLs with HTTP and HTTPS schemes are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#list_url GoogleStorageTransferJob#list_url}

---

### GoogleStorageTransferJobTransferSpecObjectConditions <a name="GoogleStorageTransferJobTransferSpecObjectConditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecObjectConditions {
    string[] ExcludePrefixes = null,
    string[] IncludePrefixes = null,
    string LastModifiedBefore = null,
    string LastModifiedSince = null,
    string MaxTimeElapsedSinceLastModification = null,
    string MinTimeElapsedSinceLastModification = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.excludePrefixes">ExcludePrefixes</a></code> | <code>string[]</code> | exclude_prefixes must follow the requirements described for include_prefixes. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.includePrefixes">IncludePrefixes</a></code> | <code>string[]</code> | If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.lastModifiedBefore">LastModifiedBefore</a></code> | <code>string</code> | If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.lastModifiedSince">LastModifiedSince</a></code> | <code>string</code> | If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.maxTimeElapsedSinceLastModification">MaxTimeElapsedSinceLastModification</a></code> | <code>string</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.minTimeElapsedSinceLastModification">MinTimeElapsedSinceLastModification</a></code> | <code>string</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |

---

##### `ExcludePrefixes`<sup>Optional</sup> <a name="ExcludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.excludePrefixes"></a>

```csharp
public string[] ExcludePrefixes { get; set; }
```

- *Type:* string[]

exclude_prefixes must follow the requirements described for include_prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#exclude_prefixes GoogleStorageTransferJob#exclude_prefixes}

---

##### `IncludePrefixes`<sup>Optional</sup> <a name="IncludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.includePrefixes"></a>

```csharp
public string[] IncludePrefixes { get; set; }
```

- *Type:* string[]

If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes.

If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#include_prefixes GoogleStorageTransferJob#include_prefixes}

---

##### `LastModifiedBefore`<sup>Optional</sup> <a name="LastModifiedBefore" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.lastModifiedBefore"></a>

```csharp
public string LastModifiedBefore { get; set; }
```

- *Type:* string

If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#last_modified_before GoogleStorageTransferJob#last_modified_before}

---

##### `LastModifiedSince`<sup>Optional</sup> <a name="LastModifiedSince" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.lastModifiedSince"></a>

```csharp
public string LastModifiedSince { get; set; }
```

- *Type:* string

If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#last_modified_since GoogleStorageTransferJob#last_modified_since}

---

##### `MaxTimeElapsedSinceLastModification`<sup>Optional</sup> <a name="MaxTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.maxTimeElapsedSinceLastModification"></a>

```csharp
public string MaxTimeElapsedSinceLastModification { get; set; }
```

- *Type:* string

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#max_time_elapsed_since_last_modification GoogleStorageTransferJob#max_time_elapsed_since_last_modification}

---

##### `MinTimeElapsedSinceLastModification`<sup>Optional</sup> <a name="MinTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.minTimeElapsedSinceLastModification"></a>

```csharp
public string MinTimeElapsedSinceLastModification { get; set; }
```

- *Type:* string

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#min_time_elapsed_since_last_modification GoogleStorageTransferJob#min_time_elapsed_since_last_modification}

---

### GoogleStorageTransferJobTransferSpecPosixDataSink <a name="GoogleStorageTransferJobTransferSpecPosixDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecPosixDataSink {
    string RootDirectory
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink.property.rootDirectory">RootDirectory</a></code> | <code>string</code> | Root directory path to the filesystem. |

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink.property.rootDirectory"></a>

```csharp
public string RootDirectory { get; set; }
```

- *Type:* string

Root directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#root_directory GoogleStorageTransferJob#root_directory}

---

### GoogleStorageTransferJobTransferSpecPosixDataSource <a name="GoogleStorageTransferJobTransferSpecPosixDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecPosixDataSource {
    string RootDirectory
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource.property.rootDirectory">RootDirectory</a></code> | <code>string</code> | Root directory path to the filesystem. |

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource.property.rootDirectory"></a>

```csharp
public string RootDirectory { get; set; }
```

- *Type:* string

Root directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#root_directory GoogleStorageTransferJob#root_directory}

---

### GoogleStorageTransferJobTransferSpecTransferOptions <a name="GoogleStorageTransferJobTransferSpecTransferOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecTransferOptions {
    object DeleteObjectsFromSourceAfterTransfer = null,
    object DeleteObjectsUniqueInSink = null,
    GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions MetadataOptions = null,
    object OverwriteObjectsAlreadyExistingInSink = null,
    string OverwriteWhen = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer">DeleteObjectsFromSourceAfterTransfer</a></code> | <code>object</code> | Whether objects should be deleted from the source after they are transferred to the sink. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.deleteObjectsUniqueInSink">DeleteObjectsUniqueInSink</a></code> | <code>object</code> | Whether objects that exist only in the sink should be deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions">GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink">OverwriteObjectsAlreadyExistingInSink</a></code> | <code>object</code> | Whether overwriting objects that already exist in the sink is allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.overwriteWhen">OverwriteWhen</a></code> | <code>string</code> | When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink. |

---

##### `DeleteObjectsFromSourceAfterTransfer`<sup>Optional</sup> <a name="DeleteObjectsFromSourceAfterTransfer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer"></a>

```csharp
public object DeleteObjectsFromSourceAfterTransfer { get; set; }
```

- *Type:* object

Whether objects should be deleted from the source after they are transferred to the sink.

Note that this option and delete_objects_unique_in_sink are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#delete_objects_from_source_after_transfer GoogleStorageTransferJob#delete_objects_from_source_after_transfer}

---

##### `DeleteObjectsUniqueInSink`<sup>Optional</sup> <a name="DeleteObjectsUniqueInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.deleteObjectsUniqueInSink"></a>

```csharp
public object DeleteObjectsUniqueInSink { get; set; }
```

- *Type:* object

Whether objects that exist only in the sink should be deleted.

Note that this option and delete_objects_from_source_after_transfer are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#delete_objects_unique_in_sink GoogleStorageTransferJob#delete_objects_unique_in_sink}

---

##### `MetadataOptions`<sup>Optional</sup> <a name="MetadataOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.metadataOptions"></a>

```csharp
public GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions MetadataOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions">GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#metadata_options GoogleStorageTransferJob#metadata_options}

---

##### `OverwriteObjectsAlreadyExistingInSink`<sup>Optional</sup> <a name="OverwriteObjectsAlreadyExistingInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink"></a>

```csharp
public object OverwriteObjectsAlreadyExistingInSink { get; set; }
```

- *Type:* object

Whether overwriting objects that already exist in the sink is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#overwrite_objects_already_existing_in_sink GoogleStorageTransferJob#overwrite_objects_already_existing_in_sink}

---

##### `OverwriteWhen`<sup>Optional</sup> <a name="OverwriteWhen" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.overwriteWhen"></a>

```csharp
public string OverwriteWhen { get; set; }
```

- *Type:* string

When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#overwrite_when GoogleStorageTransferJob#overwrite_when}

---

### GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions <a name="GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions {
    string Acl = null,
    string Gid = null,
    string KmsKey = null,
    string Mode = null,
    string StorageClass = null,
    string Symlink = null,
    string TemporaryHold = null,
    string TimeCreated = null,
    string Uid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.acl">Acl</a></code> | <code>string</code> | Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.gid">Gid</a></code> | <code>string</code> | Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.kmsKey">KmsKey</a></code> | <code>string</code> | Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.mode">Mode</a></code> | <code>string</code> | Specifies how each file's mode attribute should be handled by the transfer. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.storageClass">StorageClass</a></code> | <code>string</code> | Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.symlink">Symlink</a></code> | <code>string</code> | Specifies how symlinks should be handled by the transfer. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.temporaryHold">TemporaryHold</a></code> | <code>string</code> | SSpecifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.timeCreated">TimeCreated</a></code> | <code>string</code> | Specifies how each object's timeCreated metadata is preserved for transfers. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.uid">Uid</a></code> | <code>string</code> | Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer. |

---

##### `Acl`<sup>Optional</sup> <a name="Acl" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.acl"></a>

```csharp
public string Acl { get; set; }
```

- *Type:* string

Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#acl GoogleStorageTransferJob#acl}

---

##### `Gid`<sup>Optional</sup> <a name="Gid" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.gid"></a>

```csharp
public string Gid { get; set; }
```

- *Type:* string

Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#gid GoogleStorageTransferJob#gid}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#kms_key GoogleStorageTransferJob#kms_key}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Specifies how each file's mode attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#mode GoogleStorageTransferJob#mode}

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#storage_class GoogleStorageTransferJob#storage_class}

---

##### `Symlink`<sup>Optional</sup> <a name="Symlink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.symlink"></a>

```csharp
public string Symlink { get; set; }
```

- *Type:* string

Specifies how symlinks should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#symlink GoogleStorageTransferJob#symlink}

---

##### `TemporaryHold`<sup>Optional</sup> <a name="TemporaryHold" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.temporaryHold"></a>

```csharp
public string TemporaryHold { get; set; }
```

- *Type:* string

SSpecifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#temporary_hold GoogleStorageTransferJob#temporary_hold}

---

##### `TimeCreated`<sup>Optional</sup> <a name="TimeCreated" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.timeCreated"></a>

```csharp
public string TimeCreated { get; set; }
```

- *Type:* string

Specifies how each object's timeCreated metadata is preserved for transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#time_created GoogleStorageTransferJob#time_created}

---

##### `Uid`<sup>Optional</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.uid"></a>

```csharp
public string Uid { get; set; }
```

- *Type:* string

Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_transfer_job#uid GoogleStorageTransferJob#uid}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageTransferJobEventStreamOutputReference <a name="GoogleStorageTransferJobEventStreamOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobEventStreamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.resetEventStreamExpirationTime">ResetEventStreamExpirationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.resetEventStreamStartTime">ResetEventStreamStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventStreamExpirationTime` <a name="ResetEventStreamExpirationTime" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.resetEventStreamExpirationTime"></a>

```csharp
private void ResetEventStreamExpirationTime()
```

##### `ResetEventStreamStartTime` <a name="ResetEventStreamStartTime" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.resetEventStreamStartTime"></a>

```csharp
private void ResetEventStreamStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTimeInput">EventStreamExpirationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamStartTimeInput">EventStreamStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTime">EventStreamExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamStartTime">EventStreamStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream">GoogleStorageTransferJobEventStream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventStreamExpirationTimeInput`<sup>Optional</sup> <a name="EventStreamExpirationTimeInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTimeInput"></a>

```csharp
public string EventStreamExpirationTimeInput { get; }
```

- *Type:* string

---

##### `EventStreamStartTimeInput`<sup>Optional</sup> <a name="EventStreamStartTimeInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamStartTimeInput"></a>

```csharp
public string EventStreamStartTimeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EventStreamExpirationTime`<sup>Required</sup> <a name="EventStreamExpirationTime" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTime"></a>

```csharp
public string EventStreamExpirationTime { get; }
```

- *Type:* string

---

##### `EventStreamStartTime`<sup>Required</sup> <a name="EventStreamStartTime" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamStartTime"></a>

```csharp
public string EventStreamStartTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobEventStream InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream">GoogleStorageTransferJobEventStream</a>

---


### GoogleStorageTransferJobLoggingConfigOutputReference <a name="GoogleStorageTransferJobLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.resetEnableOnPremGcsTransferLogs">ResetEnableOnPremGcsTransferLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.resetLogActions">ResetLogActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.resetLogActionStates">ResetLogActionStates</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableOnPremGcsTransferLogs` <a name="ResetEnableOnPremGcsTransferLogs" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.resetEnableOnPremGcsTransferLogs"></a>

```csharp
private void ResetEnableOnPremGcsTransferLogs()
```

##### `ResetLogActions` <a name="ResetLogActions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.resetLogActions"></a>

```csharp
private void ResetLogActions()
```

##### `ResetLogActionStates` <a name="ResetLogActionStates" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.resetLogActionStates"></a>

```csharp
private void ResetLogActionStates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.property.enableOnPremGcsTransferLogsInput">EnableOnPremGcsTransferLogsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.property.logActionsInput">LogActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.property.logActionStatesInput">LogActionStatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.property.enableOnPremGcsTransferLogs">EnableOnPremGcsTransferLogs</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.property.logActions">LogActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.property.logActionStates">LogActionStates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfig">GoogleStorageTransferJobLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableOnPremGcsTransferLogsInput`<sup>Optional</sup> <a name="EnableOnPremGcsTransferLogsInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.property.enableOnPremGcsTransferLogsInput"></a>

```csharp
public object EnableOnPremGcsTransferLogsInput { get; }
```

- *Type:* object

---

##### `LogActionsInput`<sup>Optional</sup> <a name="LogActionsInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.property.logActionsInput"></a>

```csharp
public string[] LogActionsInput { get; }
```

- *Type:* string[]

---

##### `LogActionStatesInput`<sup>Optional</sup> <a name="LogActionStatesInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.property.logActionStatesInput"></a>

```csharp
public string[] LogActionStatesInput { get; }
```

- *Type:* string[]

---

##### `EnableOnPremGcsTransferLogs`<sup>Required</sup> <a name="EnableOnPremGcsTransferLogs" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.property.enableOnPremGcsTransferLogs"></a>

```csharp
public object EnableOnPremGcsTransferLogs { get; }
```

- *Type:* object

---

##### `LogActions`<sup>Required</sup> <a name="LogActions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.property.logActions"></a>

```csharp
public string[] LogActions { get; }
```

- *Type:* string[]

---

##### `LogActionStates`<sup>Required</sup> <a name="LogActionStates" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.property.logActionStates"></a>

```csharp
public string[] LogActionStates { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobLoggingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobLoggingConfig">GoogleStorageTransferJobLoggingConfig</a>

---


### GoogleStorageTransferJobNotificationConfigOutputReference <a name="GoogleStorageTransferJobNotificationConfigOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobNotificationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.resetEventTypes">ResetEventTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventTypes` <a name="ResetEventTypes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.resetEventTypes"></a>

```csharp
private void ResetEventTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.eventTypesInput">EventTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.payloadFormatInput">PayloadFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.pubsubTopicInput">PubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.eventTypes">EventTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.payloadFormat">PayloadFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig">GoogleStorageTransferJobNotificationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventTypesInput`<sup>Optional</sup> <a name="EventTypesInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.eventTypesInput"></a>

```csharp
public string[] EventTypesInput { get; }
```

- *Type:* string[]

---

##### `PayloadFormatInput`<sup>Optional</sup> <a name="PayloadFormatInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.payloadFormatInput"></a>

```csharp
public string PayloadFormatInput { get; }
```

- *Type:* string

---

##### `PubsubTopicInput`<sup>Optional</sup> <a name="PubsubTopicInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.pubsubTopicInput"></a>

```csharp
public string PubsubTopicInput { get; }
```

- *Type:* string

---

##### `EventTypes`<sup>Required</sup> <a name="EventTypes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.eventTypes"></a>

```csharp
public string[] EventTypes { get; }
```

- *Type:* string[]

---

##### `PayloadFormat`<sup>Required</sup> <a name="PayloadFormat" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.payloadFormat"></a>

```csharp
public string PayloadFormat { get; }
```

- *Type:* string

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobNotificationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig">GoogleStorageTransferJobNotificationConfig</a>

---


### GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference <a name="GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink">GoogleStorageTransferJobReplicationSpecGcsDataSink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobReplicationSpecGcsDataSink InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink">GoogleStorageTransferJobReplicationSpecGcsDataSink</a>

---


### GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference <a name="GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource">GoogleStorageTransferJobReplicationSpecGcsDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobReplicationSpecGcsDataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource">GoogleStorageTransferJobReplicationSpecGcsDataSource</a>

---


### GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference <a name="GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetExcludePrefixes">ResetExcludePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetIncludePrefixes">ResetIncludePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedBefore">ResetLastModifiedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedSince">ResetLastModifiedSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification">ResetMaxTimeElapsedSinceLastModification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification">ResetMinTimeElapsedSinceLastModification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludePrefixes` <a name="ResetExcludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetExcludePrefixes"></a>

```csharp
private void ResetExcludePrefixes()
```

##### `ResetIncludePrefixes` <a name="ResetIncludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetIncludePrefixes"></a>

```csharp
private void ResetIncludePrefixes()
```

##### `ResetLastModifiedBefore` <a name="ResetLastModifiedBefore" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedBefore"></a>

```csharp
private void ResetLastModifiedBefore()
```

##### `ResetLastModifiedSince` <a name="ResetLastModifiedSince" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedSince"></a>

```csharp
private void ResetLastModifiedSince()
```

##### `ResetMaxTimeElapsedSinceLastModification` <a name="ResetMaxTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification"></a>

```csharp
private void ResetMaxTimeElapsedSinceLastModification()
```

##### `ResetMinTimeElapsedSinceLastModification` <a name="ResetMinTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification"></a>

```csharp
private void ResetMinTimeElapsedSinceLastModification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixesInput">ExcludePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixesInput">IncludePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput">LastModifiedBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSinceInput">LastModifiedSinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput">MaxTimeElapsedSinceLastModificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput">MinTimeElapsedSinceLastModificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixes">ExcludePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixes">IncludePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBefore">LastModifiedBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSince">LastModifiedSince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification">MaxTimeElapsedSinceLastModification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification">MinTimeElapsedSinceLastModification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions">GoogleStorageTransferJobReplicationSpecObjectConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludePrefixesInput`<sup>Optional</sup> <a name="ExcludePrefixesInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixesInput"></a>

```csharp
public string[] ExcludePrefixesInput { get; }
```

- *Type:* string[]

---

##### `IncludePrefixesInput`<sup>Optional</sup> <a name="IncludePrefixesInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixesInput"></a>

```csharp
public string[] IncludePrefixesInput { get; }
```

- *Type:* string[]

---

##### `LastModifiedBeforeInput`<sup>Optional</sup> <a name="LastModifiedBeforeInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput"></a>

```csharp
public string LastModifiedBeforeInput { get; }
```

- *Type:* string

---

##### `LastModifiedSinceInput`<sup>Optional</sup> <a name="LastModifiedSinceInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSinceInput"></a>

```csharp
public string LastModifiedSinceInput { get; }
```

- *Type:* string

---

##### `MaxTimeElapsedSinceLastModificationInput`<sup>Optional</sup> <a name="MaxTimeElapsedSinceLastModificationInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput"></a>

```csharp
public string MaxTimeElapsedSinceLastModificationInput { get; }
```

- *Type:* string

---

##### `MinTimeElapsedSinceLastModificationInput`<sup>Optional</sup> <a name="MinTimeElapsedSinceLastModificationInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput"></a>

```csharp
public string MinTimeElapsedSinceLastModificationInput { get; }
```

- *Type:* string

---

##### `ExcludePrefixes`<sup>Required</sup> <a name="ExcludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixes"></a>

```csharp
public string[] ExcludePrefixes { get; }
```

- *Type:* string[]

---

##### `IncludePrefixes`<sup>Required</sup> <a name="IncludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixes"></a>

```csharp
public string[] IncludePrefixes { get; }
```

- *Type:* string[]

---

##### `LastModifiedBefore`<sup>Required</sup> <a name="LastModifiedBefore" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBefore"></a>

```csharp
public string LastModifiedBefore { get; }
```

- *Type:* string

---

##### `LastModifiedSince`<sup>Required</sup> <a name="LastModifiedSince" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSince"></a>

```csharp
public string LastModifiedSince { get; }
```

- *Type:* string

---

##### `MaxTimeElapsedSinceLastModification`<sup>Required</sup> <a name="MaxTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification"></a>

```csharp
public string MaxTimeElapsedSinceLastModification { get; }
```

- *Type:* string

---

##### `MinTimeElapsedSinceLastModification`<sup>Required</sup> <a name="MinTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification"></a>

```csharp
public string MinTimeElapsedSinceLastModification { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobReplicationSpecObjectConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions">GoogleStorageTransferJobReplicationSpecObjectConditions</a>

---


### GoogleStorageTransferJobReplicationSpecOutputReference <a name="GoogleStorageTransferJobReplicationSpecOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobReplicationSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putGcsDataSink">PutGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putGcsDataSource">PutGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putObjectConditions">PutObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putTransferOptions">PutTransferOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetGcsDataSink">ResetGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetGcsDataSource">ResetGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetObjectConditions">ResetObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetTransferOptions">ResetTransferOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGcsDataSink` <a name="PutGcsDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putGcsDataSink"></a>

```csharp
private void PutGcsDataSink(GoogleStorageTransferJobReplicationSpecGcsDataSink Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putGcsDataSink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink">GoogleStorageTransferJobReplicationSpecGcsDataSink</a>

---

##### `PutGcsDataSource` <a name="PutGcsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putGcsDataSource"></a>

```csharp
private void PutGcsDataSource(GoogleStorageTransferJobReplicationSpecGcsDataSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putGcsDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource">GoogleStorageTransferJobReplicationSpecGcsDataSource</a>

---

##### `PutObjectConditions` <a name="PutObjectConditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putObjectConditions"></a>

```csharp
private void PutObjectConditions(GoogleStorageTransferJobReplicationSpecObjectConditions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putObjectConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions">GoogleStorageTransferJobReplicationSpecObjectConditions</a>

---

##### `PutTransferOptions` <a name="PutTransferOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putTransferOptions"></a>

```csharp
private void PutTransferOptions(GoogleStorageTransferJobReplicationSpecTransferOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putTransferOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions">GoogleStorageTransferJobReplicationSpecTransferOptions</a>

---

##### `ResetGcsDataSink` <a name="ResetGcsDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetGcsDataSink"></a>

```csharp
private void ResetGcsDataSink()
```

##### `ResetGcsDataSource` <a name="ResetGcsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetGcsDataSource"></a>

```csharp
private void ResetGcsDataSource()
```

##### `ResetObjectConditions` <a name="ResetObjectConditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetObjectConditions"></a>

```csharp
private void ResetObjectConditions()
```

##### `ResetTransferOptions` <a name="ResetTransferOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetTransferOptions"></a>

```csharp
private void ResetTransferOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSink">GcsDataSink</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference">GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSource">GcsDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference">GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.objectConditions">ObjectConditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference">GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.transferOptions">TransferOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference">GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSinkInput">GcsDataSinkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink">GoogleStorageTransferJobReplicationSpecGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSourceInput">GcsDataSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource">GoogleStorageTransferJobReplicationSpecGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.objectConditionsInput">ObjectConditionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions">GoogleStorageTransferJobReplicationSpecObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.transferOptionsInput">TransferOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions">GoogleStorageTransferJobReplicationSpecTransferOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec">GoogleStorageTransferJobReplicationSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcsDataSink`<sup>Required</sup> <a name="GcsDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSink"></a>

```csharp
public GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference GcsDataSink { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference">GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference</a>

---

##### `GcsDataSource`<sup>Required</sup> <a name="GcsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSource"></a>

```csharp
public GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference GcsDataSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference">GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference</a>

---

##### `ObjectConditions`<sup>Required</sup> <a name="ObjectConditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.objectConditions"></a>

```csharp
public GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference ObjectConditions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference">GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference</a>

---

##### `TransferOptions`<sup>Required</sup> <a name="TransferOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.transferOptions"></a>

```csharp
public GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference TransferOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference">GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference</a>

---

##### `GcsDataSinkInput`<sup>Optional</sup> <a name="GcsDataSinkInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSinkInput"></a>

```csharp
public GoogleStorageTransferJobReplicationSpecGcsDataSink GcsDataSinkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink">GoogleStorageTransferJobReplicationSpecGcsDataSink</a>

---

##### `GcsDataSourceInput`<sup>Optional</sup> <a name="GcsDataSourceInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSourceInput"></a>

```csharp
public GoogleStorageTransferJobReplicationSpecGcsDataSource GcsDataSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource">GoogleStorageTransferJobReplicationSpecGcsDataSource</a>

---

##### `ObjectConditionsInput`<sup>Optional</sup> <a name="ObjectConditionsInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.objectConditionsInput"></a>

```csharp
public GoogleStorageTransferJobReplicationSpecObjectConditions ObjectConditionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions">GoogleStorageTransferJobReplicationSpecObjectConditions</a>

---

##### `TransferOptionsInput`<sup>Optional</sup> <a name="TransferOptionsInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.transferOptionsInput"></a>

```csharp
public GoogleStorageTransferJobReplicationSpecTransferOptions TransferOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions">GoogleStorageTransferJobReplicationSpecTransferOptions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobReplicationSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec">GoogleStorageTransferJobReplicationSpec</a>

---


### GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference <a name="GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetAcl">ResetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetGid">ResetGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetStorageClass">ResetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetSymlink">ResetSymlink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetTemporaryHold">ResetTemporaryHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetTimeCreated">ResetTimeCreated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetUid">ResetUid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcl` <a name="ResetAcl" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetAcl"></a>

```csharp
private void ResetAcl()
```

##### `ResetGid` <a name="ResetGid" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetGid"></a>

```csharp
private void ResetGid()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetStorageClass"></a>

```csharp
private void ResetStorageClass()
```

##### `ResetSymlink` <a name="ResetSymlink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetSymlink"></a>

```csharp
private void ResetSymlink()
```

##### `ResetTemporaryHold` <a name="ResetTemporaryHold" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetTemporaryHold"></a>

```csharp
private void ResetTemporaryHold()
```

##### `ResetTimeCreated` <a name="ResetTimeCreated" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetTimeCreated"></a>

```csharp
private void ResetTimeCreated()
```

##### `ResetUid` <a name="ResetUid" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetUid"></a>

```csharp
private void ResetUid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.aclInput">AclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.gidInput">GidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.symlinkInput">SymlinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHoldInput">TemporaryHoldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreatedInput">TimeCreatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.uidInput">UidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.acl">Acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.gid">Gid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.symlink">Symlink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHold">TemporaryHold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions">GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AclInput`<sup>Optional</sup> <a name="AclInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.aclInput"></a>

```csharp
public string AclInput { get; }
```

- *Type:* string

---

##### `GidInput`<sup>Optional</sup> <a name="GidInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.gidInput"></a>

```csharp
public string GidInput { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `SymlinkInput`<sup>Optional</sup> <a name="SymlinkInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.symlinkInput"></a>

```csharp
public string SymlinkInput { get; }
```

- *Type:* string

---

##### `TemporaryHoldInput`<sup>Optional</sup> <a name="TemporaryHoldInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHoldInput"></a>

```csharp
public string TemporaryHoldInput { get; }
```

- *Type:* string

---

##### `TimeCreatedInput`<sup>Optional</sup> <a name="TimeCreatedInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreatedInput"></a>

```csharp
public string TimeCreatedInput { get; }
```

- *Type:* string

---

##### `UidInput`<sup>Optional</sup> <a name="UidInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.uidInput"></a>

```csharp
public string UidInput { get; }
```

- *Type:* string

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.acl"></a>

```csharp
public string Acl { get; }
```

- *Type:* string

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.gid"></a>

```csharp
public string Gid { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `Symlink`<sup>Required</sup> <a name="Symlink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.symlink"></a>

```csharp
public string Symlink { get; }
```

- *Type:* string

---

##### `TemporaryHold`<sup>Required</sup> <a name="TemporaryHold" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHold"></a>

```csharp
public string TemporaryHold { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions">GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a>

---


### GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference <a name="GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.putMetadataOptions">PutMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer">ResetDeleteObjectsFromSourceAfterTransfer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink">ResetDeleteObjectsUniqueInSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetMetadataOptions">ResetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink">ResetOverwriteObjectsAlreadyExistingInSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteWhen">ResetOverwriteWhen</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetadataOptions` <a name="PutMetadataOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.putMetadataOptions"></a>

```csharp
private void PutMetadataOptions(GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions">GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a>

---

##### `ResetDeleteObjectsFromSourceAfterTransfer` <a name="ResetDeleteObjectsFromSourceAfterTransfer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer"></a>

```csharp
private void ResetDeleteObjectsFromSourceAfterTransfer()
```

##### `ResetDeleteObjectsUniqueInSink` <a name="ResetDeleteObjectsUniqueInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink"></a>

```csharp
private void ResetDeleteObjectsUniqueInSink()
```

##### `ResetMetadataOptions` <a name="ResetMetadataOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetMetadataOptions"></a>

```csharp
private void ResetMetadataOptions()
```

##### `ResetOverwriteObjectsAlreadyExistingInSink` <a name="ResetOverwriteObjectsAlreadyExistingInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink"></a>

```csharp
private void ResetOverwriteObjectsAlreadyExistingInSink()
```

##### `ResetOverwriteWhen` <a name="ResetOverwriteWhen" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteWhen"></a>

```csharp
private void ResetOverwriteWhen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference">GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput">DeleteObjectsFromSourceAfterTransferInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput">DeleteObjectsUniqueInSinkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.metadataOptionsInput">MetadataOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions">GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput">OverwriteObjectsAlreadyExistingInSinkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhenInput">OverwriteWhenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer">DeleteObjectsFromSourceAfterTransfer</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink">DeleteObjectsUniqueInSink</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink">OverwriteObjectsAlreadyExistingInSink</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhen">OverwriteWhen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions">GoogleStorageTransferJobReplicationSpecTransferOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetadataOptions`<sup>Required</sup> <a name="MetadataOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.metadataOptions"></a>

```csharp
public GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference MetadataOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference">GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference</a>

---

##### `DeleteObjectsFromSourceAfterTransferInput`<sup>Optional</sup> <a name="DeleteObjectsFromSourceAfterTransferInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput"></a>

```csharp
public object DeleteObjectsFromSourceAfterTransferInput { get; }
```

- *Type:* object

---

##### `DeleteObjectsUniqueInSinkInput`<sup>Optional</sup> <a name="DeleteObjectsUniqueInSinkInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput"></a>

```csharp
public object DeleteObjectsUniqueInSinkInput { get; }
```

- *Type:* object

---

##### `MetadataOptionsInput`<sup>Optional</sup> <a name="MetadataOptionsInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.metadataOptionsInput"></a>

```csharp
public GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions MetadataOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions">GoogleStorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a>

---

##### `OverwriteObjectsAlreadyExistingInSinkInput`<sup>Optional</sup> <a name="OverwriteObjectsAlreadyExistingInSinkInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput"></a>

```csharp
public object OverwriteObjectsAlreadyExistingInSinkInput { get; }
```

- *Type:* object

---

##### `OverwriteWhenInput`<sup>Optional</sup> <a name="OverwriteWhenInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhenInput"></a>

```csharp
public string OverwriteWhenInput { get; }
```

- *Type:* string

---

##### `DeleteObjectsFromSourceAfterTransfer`<sup>Required</sup> <a name="DeleteObjectsFromSourceAfterTransfer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer"></a>

```csharp
public object DeleteObjectsFromSourceAfterTransfer { get; }
```

- *Type:* object

---

##### `DeleteObjectsUniqueInSink`<sup>Required</sup> <a name="DeleteObjectsUniqueInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink"></a>

```csharp
public object DeleteObjectsUniqueInSink { get; }
```

- *Type:* object

---

##### `OverwriteObjectsAlreadyExistingInSink`<sup>Required</sup> <a name="OverwriteObjectsAlreadyExistingInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink"></a>

```csharp
public object OverwriteObjectsAlreadyExistingInSink { get; }
```

- *Type:* object

---

##### `OverwriteWhen`<sup>Required</sup> <a name="OverwriteWhen" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhen"></a>

```csharp
public string OverwriteWhen { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobReplicationSpecTransferOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions">GoogleStorageTransferJobReplicationSpecTransferOptions</a>

---


### GoogleStorageTransferJobScheduleOutputReference <a name="GoogleStorageTransferJobScheduleOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putScheduleEndDate">PutScheduleEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putScheduleStartDate">PutScheduleStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putStartTimeOfDay">PutStartTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resetRepeatInterval">ResetRepeatInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resetScheduleEndDate">ResetScheduleEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resetStartTimeOfDay">ResetStartTimeOfDay</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScheduleEndDate` <a name="PutScheduleEndDate" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putScheduleEndDate"></a>

```csharp
private void PutScheduleEndDate(GoogleStorageTransferJobScheduleScheduleEndDate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putScheduleEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate">GoogleStorageTransferJobScheduleScheduleEndDate</a>

---

##### `PutScheduleStartDate` <a name="PutScheduleStartDate" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putScheduleStartDate"></a>

```csharp
private void PutScheduleStartDate(GoogleStorageTransferJobScheduleScheduleStartDate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putScheduleStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate">GoogleStorageTransferJobScheduleScheduleStartDate</a>

---

##### `PutStartTimeOfDay` <a name="PutStartTimeOfDay" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putStartTimeOfDay"></a>

```csharp
private void PutStartTimeOfDay(GoogleStorageTransferJobScheduleStartTimeOfDay Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putStartTimeOfDay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay">GoogleStorageTransferJobScheduleStartTimeOfDay</a>

---

##### `ResetRepeatInterval` <a name="ResetRepeatInterval" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resetRepeatInterval"></a>

```csharp
private void ResetRepeatInterval()
```

##### `ResetScheduleEndDate` <a name="ResetScheduleEndDate" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resetScheduleEndDate"></a>

```csharp
private void ResetScheduleEndDate()
```

##### `ResetStartTimeOfDay` <a name="ResetStartTimeOfDay" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resetStartTimeOfDay"></a>

```csharp
private void ResetStartTimeOfDay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleEndDate">ScheduleEndDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference">GoogleStorageTransferJobScheduleScheduleEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleStartDate">ScheduleStartDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference">GoogleStorageTransferJobScheduleScheduleStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.startTimeOfDay">StartTimeOfDay</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference">GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.repeatIntervalInput">RepeatIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleEndDateInput">ScheduleEndDateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate">GoogleStorageTransferJobScheduleScheduleEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleStartDateInput">ScheduleStartDateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate">GoogleStorageTransferJobScheduleScheduleStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.startTimeOfDayInput">StartTimeOfDayInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay">GoogleStorageTransferJobScheduleStartTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.repeatInterval">RepeatInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule">GoogleStorageTransferJobSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScheduleEndDate`<sup>Required</sup> <a name="ScheduleEndDate" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleEndDate"></a>

```csharp
public GoogleStorageTransferJobScheduleScheduleEndDateOutputReference ScheduleEndDate { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference">GoogleStorageTransferJobScheduleScheduleEndDateOutputReference</a>

---

##### `ScheduleStartDate`<sup>Required</sup> <a name="ScheduleStartDate" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleStartDate"></a>

```csharp
public GoogleStorageTransferJobScheduleScheduleStartDateOutputReference ScheduleStartDate { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference">GoogleStorageTransferJobScheduleScheduleStartDateOutputReference</a>

---

##### `StartTimeOfDay`<sup>Required</sup> <a name="StartTimeOfDay" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.startTimeOfDay"></a>

```csharp
public GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference StartTimeOfDay { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference">GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference</a>

---

##### `RepeatIntervalInput`<sup>Optional</sup> <a name="RepeatIntervalInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.repeatIntervalInput"></a>

```csharp
public string RepeatIntervalInput { get; }
```

- *Type:* string

---

##### `ScheduleEndDateInput`<sup>Optional</sup> <a name="ScheduleEndDateInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleEndDateInput"></a>

```csharp
public GoogleStorageTransferJobScheduleScheduleEndDate ScheduleEndDateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate">GoogleStorageTransferJobScheduleScheduleEndDate</a>

---

##### `ScheduleStartDateInput`<sup>Optional</sup> <a name="ScheduleStartDateInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleStartDateInput"></a>

```csharp
public GoogleStorageTransferJobScheduleScheduleStartDate ScheduleStartDateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate">GoogleStorageTransferJobScheduleScheduleStartDate</a>

---

##### `StartTimeOfDayInput`<sup>Optional</sup> <a name="StartTimeOfDayInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.startTimeOfDayInput"></a>

```csharp
public GoogleStorageTransferJobScheduleStartTimeOfDay StartTimeOfDayInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay">GoogleStorageTransferJobScheduleStartTimeOfDay</a>

---

##### `RepeatInterval`<sup>Required</sup> <a name="RepeatInterval" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.repeatInterval"></a>

```csharp
public string RepeatInterval { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule">GoogleStorageTransferJobSchedule</a>

---


### GoogleStorageTransferJobScheduleScheduleEndDateOutputReference <a name="GoogleStorageTransferJobScheduleScheduleEndDateOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobScheduleScheduleEndDateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.dayInput">DayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.monthInput">MonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.yearInput">YearInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.day">Day</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.month">Month</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.year">Year</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate">GoogleStorageTransferJobScheduleScheduleEndDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.dayInput"></a>

```csharp
public double DayInput { get; }
```

- *Type:* double

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.monthInput"></a>

```csharp
public double MonthInput { get; }
```

- *Type:* double

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.yearInput"></a>

```csharp
public double YearInput { get; }
```

- *Type:* double

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.day"></a>

```csharp
public double Day { get; }
```

- *Type:* double

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.month"></a>

```csharp
public double Month { get; }
```

- *Type:* double

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.year"></a>

```csharp
public double Year { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobScheduleScheduleEndDate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate">GoogleStorageTransferJobScheduleScheduleEndDate</a>

---


### GoogleStorageTransferJobScheduleScheduleStartDateOutputReference <a name="GoogleStorageTransferJobScheduleScheduleStartDateOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobScheduleScheduleStartDateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.dayInput">DayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.monthInput">MonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.yearInput">YearInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.day">Day</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.month">Month</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.year">Year</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate">GoogleStorageTransferJobScheduleScheduleStartDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.dayInput"></a>

```csharp
public double DayInput { get; }
```

- *Type:* double

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.monthInput"></a>

```csharp
public double MonthInput { get; }
```

- *Type:* double

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.yearInput"></a>

```csharp
public double YearInput { get; }
```

- *Type:* double

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.day"></a>

```csharp
public double Day { get; }
```

- *Type:* double

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.month"></a>

```csharp
public double Month { get; }
```

- *Type:* double

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.year"></a>

```csharp
public double Year { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobScheduleScheduleStartDate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate">GoogleStorageTransferJobScheduleScheduleStartDate</a>

---


### GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference <a name="GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay">GoogleStorageTransferJobScheduleStartTimeOfDay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobScheduleStartTimeOfDay InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay">GoogleStorageTransferJobScheduleStartTimeOfDay</a>

---


### GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference <a name="GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyIdInput"></a>

```csharp
public string AccessKeyIdInput { get; }
```

- *Type:* string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKeyInput"></a>

```csharp
public string SecretAccessKeyInput { get; }
```

- *Type:* string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; }
```

- *Type:* string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

---


### GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference <a name="GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.putAwsAccessKey">PutAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetAwsAccessKey">ResetAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetManagedPrivateNetwork">ResetManagedPrivateNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsAccessKey` <a name="PutAwsAccessKey" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.putAwsAccessKey"></a>

```csharp
private void PutAwsAccessKey(GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.putAwsAccessKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

---

##### `ResetAwsAccessKey` <a name="ResetAwsAccessKey" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetAwsAccessKey"></a>

```csharp
private void ResetAwsAccessKey()
```

##### `ResetManagedPrivateNetwork` <a name="ResetManagedPrivateNetwork" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetManagedPrivateNetwork"></a>

```csharp
private void ResetManagedPrivateNetwork()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKey">AwsAccessKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKeyInput">AwsAccessKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.managedPrivateNetworkInput">ManagedPrivateNetworkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.managedPrivateNetwork">ManagedPrivateNetwork</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource">GoogleStorageTransferJobTransferSpecAwsS3DataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsAccessKey`<sup>Required</sup> <a name="AwsAccessKey" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKey"></a>

```csharp
public GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference AwsAccessKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference</a>

---

##### `AwsAccessKeyInput`<sup>Optional</sup> <a name="AwsAccessKeyInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKeyInput"></a>

```csharp
public GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey AwsAccessKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `ManagedPrivateNetworkInput`<sup>Optional</sup> <a name="ManagedPrivateNetworkInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.managedPrivateNetworkInput"></a>

```csharp
public object ManagedPrivateNetworkInput { get; }
```

- *Type:* object

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `ManagedPrivateNetwork`<sup>Required</sup> <a name="ManagedPrivateNetwork" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.managedPrivateNetwork"></a>

```csharp
public object ManagedPrivateNetwork { get; }
```

- *Type:* object

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobTransferSpecAwsS3DataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource">GoogleStorageTransferJobTransferSpecAwsS3DataSource</a>

---


### GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference <a name="GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasTokenInput">SasTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasToken">SasToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SasTokenInput`<sup>Optional</sup> <a name="SasTokenInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasTokenInput"></a>

```csharp
public string SasTokenInput { get; }
```

- *Type:* string

---

##### `SasToken`<sup>Required</sup> <a name="SasToken" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasToken"></a>

```csharp
public string SasToken { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

---


### GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference <a name="GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putAzureCredentials">PutAzureCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetAzureCredentials">ResetAzureCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetCredentialsSecret">ResetCredentialsSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAzureCredentials` <a name="PutAzureCredentials" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putAzureCredentials"></a>

```csharp
private void PutAzureCredentials(GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putAzureCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

---

##### `ResetAzureCredentials` <a name="ResetAzureCredentials" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetAzureCredentials"></a>

```csharp
private void ResetAzureCredentials()
```

##### `ResetCredentialsSecret` <a name="ResetCredentialsSecret" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetCredentialsSecret"></a>

```csharp
private void ResetCredentialsSecret()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentials">AzureCredentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentialsInput">AzureCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.containerInput">ContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.credentialsSecretInput">CredentialsSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccountInput">StorageAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.container">Container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.credentialsSecret">CredentialsSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccount">StorageAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AzureCredentials`<sup>Required</sup> <a name="AzureCredentials" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentials"></a>

```csharp
public GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference AzureCredentials { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference</a>

---

##### `AzureCredentialsInput`<sup>Optional</sup> <a name="AzureCredentialsInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentialsInput"></a>

```csharp
public GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials AzureCredentialsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.containerInput"></a>

```csharp
public string ContainerInput { get; }
```

- *Type:* string

---

##### `CredentialsSecretInput`<sup>Optional</sup> <a name="CredentialsSecretInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.credentialsSecretInput"></a>

```csharp
public string CredentialsSecretInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `StorageAccountInput`<sup>Optional</sup> <a name="StorageAccountInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccountInput"></a>

```csharp
public string StorageAccountInput { get; }
```

- *Type:* string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.container"></a>

```csharp
public string Container { get; }
```

- *Type:* string

---

##### `CredentialsSecret`<sup>Required</sup> <a name="CredentialsSecret" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.credentialsSecret"></a>

```csharp
public string CredentialsSecret { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccount"></a>

```csharp
public string StorageAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

---


### GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference <a name="GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink">GoogleStorageTransferJobTransferSpecGcsDataSink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobTransferSpecGcsDataSink InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink">GoogleStorageTransferJobTransferSpecGcsDataSink</a>

---


### GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference <a name="GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource">GoogleStorageTransferJobTransferSpecGcsDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobTransferSpecGcsDataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource">GoogleStorageTransferJobTransferSpecGcsDataSource</a>

---


### GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference <a name="GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource">GoogleStorageTransferJobTransferSpecHdfsDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobTransferSpecHdfsDataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource">GoogleStorageTransferJobTransferSpecHdfsDataSource</a>

---


### GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference <a name="GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrlInput">ListUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrl">ListUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource">GoogleStorageTransferJobTransferSpecHttpDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ListUrlInput`<sup>Optional</sup> <a name="ListUrlInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrlInput"></a>

```csharp
public string ListUrlInput { get; }
```

- *Type:* string

---

##### `ListUrl`<sup>Required</sup> <a name="ListUrl" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrl"></a>

```csharp
public string ListUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobTransferSpecHttpDataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource">GoogleStorageTransferJobTransferSpecHttpDataSource</a>

---


### GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference <a name="GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetExcludePrefixes">ResetExcludePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetIncludePrefixes">ResetIncludePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedBefore">ResetLastModifiedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedSince">ResetLastModifiedSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification">ResetMaxTimeElapsedSinceLastModification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification">ResetMinTimeElapsedSinceLastModification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludePrefixes` <a name="ResetExcludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetExcludePrefixes"></a>

```csharp
private void ResetExcludePrefixes()
```

##### `ResetIncludePrefixes` <a name="ResetIncludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetIncludePrefixes"></a>

```csharp
private void ResetIncludePrefixes()
```

##### `ResetLastModifiedBefore` <a name="ResetLastModifiedBefore" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedBefore"></a>

```csharp
private void ResetLastModifiedBefore()
```

##### `ResetLastModifiedSince` <a name="ResetLastModifiedSince" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedSince"></a>

```csharp
private void ResetLastModifiedSince()
```

##### `ResetMaxTimeElapsedSinceLastModification` <a name="ResetMaxTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification"></a>

```csharp
private void ResetMaxTimeElapsedSinceLastModification()
```

##### `ResetMinTimeElapsedSinceLastModification` <a name="ResetMinTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification"></a>

```csharp
private void ResetMinTimeElapsedSinceLastModification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixesInput">ExcludePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixesInput">IncludePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput">LastModifiedBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSinceInput">LastModifiedSinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput">MaxTimeElapsedSinceLastModificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput">MinTimeElapsedSinceLastModificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixes">ExcludePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixes">IncludePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBefore">LastModifiedBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSince">LastModifiedSince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification">MaxTimeElapsedSinceLastModification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification">MinTimeElapsedSinceLastModification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions">GoogleStorageTransferJobTransferSpecObjectConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludePrefixesInput`<sup>Optional</sup> <a name="ExcludePrefixesInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixesInput"></a>

```csharp
public string[] ExcludePrefixesInput { get; }
```

- *Type:* string[]

---

##### `IncludePrefixesInput`<sup>Optional</sup> <a name="IncludePrefixesInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixesInput"></a>

```csharp
public string[] IncludePrefixesInput { get; }
```

- *Type:* string[]

---

##### `LastModifiedBeforeInput`<sup>Optional</sup> <a name="LastModifiedBeforeInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput"></a>

```csharp
public string LastModifiedBeforeInput { get; }
```

- *Type:* string

---

##### `LastModifiedSinceInput`<sup>Optional</sup> <a name="LastModifiedSinceInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSinceInput"></a>

```csharp
public string LastModifiedSinceInput { get; }
```

- *Type:* string

---

##### `MaxTimeElapsedSinceLastModificationInput`<sup>Optional</sup> <a name="MaxTimeElapsedSinceLastModificationInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput"></a>

```csharp
public string MaxTimeElapsedSinceLastModificationInput { get; }
```

- *Type:* string

---

##### `MinTimeElapsedSinceLastModificationInput`<sup>Optional</sup> <a name="MinTimeElapsedSinceLastModificationInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput"></a>

```csharp
public string MinTimeElapsedSinceLastModificationInput { get; }
```

- *Type:* string

---

##### `ExcludePrefixes`<sup>Required</sup> <a name="ExcludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixes"></a>

```csharp
public string[] ExcludePrefixes { get; }
```

- *Type:* string[]

---

##### `IncludePrefixes`<sup>Required</sup> <a name="IncludePrefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixes"></a>

```csharp
public string[] IncludePrefixes { get; }
```

- *Type:* string[]

---

##### `LastModifiedBefore`<sup>Required</sup> <a name="LastModifiedBefore" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBefore"></a>

```csharp
public string LastModifiedBefore { get; }
```

- *Type:* string

---

##### `LastModifiedSince`<sup>Required</sup> <a name="LastModifiedSince" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSince"></a>

```csharp
public string LastModifiedSince { get; }
```

- *Type:* string

---

##### `MaxTimeElapsedSinceLastModification`<sup>Required</sup> <a name="MaxTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification"></a>

```csharp
public string MaxTimeElapsedSinceLastModification { get; }
```

- *Type:* string

---

##### `MinTimeElapsedSinceLastModification`<sup>Required</sup> <a name="MinTimeElapsedSinceLastModification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification"></a>

```csharp
public string MinTimeElapsedSinceLastModification { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobTransferSpecObjectConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions">GoogleStorageTransferJobTransferSpecObjectConditions</a>

---


### GoogleStorageTransferJobTransferSpecOutputReference <a name="GoogleStorageTransferJobTransferSpecOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAwsS3DataSource">PutAwsS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource">PutAzureBlobStorageDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putGcsDataSink">PutGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putGcsDataSource">PutGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putHdfsDataSource">PutHdfsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putHttpDataSource">PutHttpDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putObjectConditions">PutObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putPosixDataSink">PutPosixDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putPosixDataSource">PutPosixDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putTransferOptions">PutTransferOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetAwsS3DataSource">ResetAwsS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetAzureBlobStorageDataSource">ResetAzureBlobStorageDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetGcsDataSink">ResetGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetGcsDataSource">ResetGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetHdfsDataSource">ResetHdfsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetHttpDataSource">ResetHttpDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetObjectConditions">ResetObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetPosixDataSink">ResetPosixDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetPosixDataSource">ResetPosixDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetSinkAgentPoolName">ResetSinkAgentPoolName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetSourceAgentPoolName">ResetSourceAgentPoolName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetTransferOptions">ResetTransferOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsS3DataSource` <a name="PutAwsS3DataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAwsS3DataSource"></a>

```csharp
private void PutAwsS3DataSource(GoogleStorageTransferJobTransferSpecAwsS3DataSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAwsS3DataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource">GoogleStorageTransferJobTransferSpecAwsS3DataSource</a>

---

##### `PutAzureBlobStorageDataSource` <a name="PutAzureBlobStorageDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource"></a>

```csharp
private void PutAzureBlobStorageDataSource(GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

---

##### `PutGcsDataSink` <a name="PutGcsDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putGcsDataSink"></a>

```csharp
private void PutGcsDataSink(GoogleStorageTransferJobTransferSpecGcsDataSink Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putGcsDataSink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink">GoogleStorageTransferJobTransferSpecGcsDataSink</a>

---

##### `PutGcsDataSource` <a name="PutGcsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putGcsDataSource"></a>

```csharp
private void PutGcsDataSource(GoogleStorageTransferJobTransferSpecGcsDataSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putGcsDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource">GoogleStorageTransferJobTransferSpecGcsDataSource</a>

---

##### `PutHdfsDataSource` <a name="PutHdfsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putHdfsDataSource"></a>

```csharp
private void PutHdfsDataSource(GoogleStorageTransferJobTransferSpecHdfsDataSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putHdfsDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource">GoogleStorageTransferJobTransferSpecHdfsDataSource</a>

---

##### `PutHttpDataSource` <a name="PutHttpDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putHttpDataSource"></a>

```csharp
private void PutHttpDataSource(GoogleStorageTransferJobTransferSpecHttpDataSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putHttpDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource">GoogleStorageTransferJobTransferSpecHttpDataSource</a>

---

##### `PutObjectConditions` <a name="PutObjectConditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putObjectConditions"></a>

```csharp
private void PutObjectConditions(GoogleStorageTransferJobTransferSpecObjectConditions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putObjectConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions">GoogleStorageTransferJobTransferSpecObjectConditions</a>

---

##### `PutPosixDataSink` <a name="PutPosixDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putPosixDataSink"></a>

```csharp
private void PutPosixDataSink(GoogleStorageTransferJobTransferSpecPosixDataSink Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putPosixDataSink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink">GoogleStorageTransferJobTransferSpecPosixDataSink</a>

---

##### `PutPosixDataSource` <a name="PutPosixDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putPosixDataSource"></a>

```csharp
private void PutPosixDataSource(GoogleStorageTransferJobTransferSpecPosixDataSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putPosixDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource">GoogleStorageTransferJobTransferSpecPosixDataSource</a>

---

##### `PutTransferOptions` <a name="PutTransferOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putTransferOptions"></a>

```csharp
private void PutTransferOptions(GoogleStorageTransferJobTransferSpecTransferOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putTransferOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions">GoogleStorageTransferJobTransferSpecTransferOptions</a>

---

##### `ResetAwsS3DataSource` <a name="ResetAwsS3DataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetAwsS3DataSource"></a>

```csharp
private void ResetAwsS3DataSource()
```

##### `ResetAzureBlobStorageDataSource` <a name="ResetAzureBlobStorageDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetAzureBlobStorageDataSource"></a>

```csharp
private void ResetAzureBlobStorageDataSource()
```

##### `ResetGcsDataSink` <a name="ResetGcsDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetGcsDataSink"></a>

```csharp
private void ResetGcsDataSink()
```

##### `ResetGcsDataSource` <a name="ResetGcsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetGcsDataSource"></a>

```csharp
private void ResetGcsDataSource()
```

##### `ResetHdfsDataSource` <a name="ResetHdfsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetHdfsDataSource"></a>

```csharp
private void ResetHdfsDataSource()
```

##### `ResetHttpDataSource` <a name="ResetHttpDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetHttpDataSource"></a>

```csharp
private void ResetHttpDataSource()
```

##### `ResetObjectConditions` <a name="ResetObjectConditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetObjectConditions"></a>

```csharp
private void ResetObjectConditions()
```

##### `ResetPosixDataSink` <a name="ResetPosixDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetPosixDataSink"></a>

```csharp
private void ResetPosixDataSink()
```

##### `ResetPosixDataSource` <a name="ResetPosixDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetPosixDataSource"></a>

```csharp
private void ResetPosixDataSource()
```

##### `ResetSinkAgentPoolName` <a name="ResetSinkAgentPoolName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetSinkAgentPoolName"></a>

```csharp
private void ResetSinkAgentPoolName()
```

##### `ResetSourceAgentPoolName` <a name="ResetSourceAgentPoolName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetSourceAgentPoolName"></a>

```csharp
private void ResetSourceAgentPoolName()
```

##### `ResetTransferOptions` <a name="ResetTransferOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetTransferOptions"></a>

```csharp
private void ResetTransferOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.awsS3DataSource">AwsS3DataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference">GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSource">AzureBlobStorageDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSink">GcsDataSink</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference">GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSource">GcsDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference">GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.hdfsDataSource">HdfsDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference">GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.httpDataSource">HttpDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference">GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.objectConditions">ObjectConditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference">GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSink">PosixDataSink</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference">GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSource">PosixDataSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference">GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.transferOptions">TransferOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference">GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.awsS3DataSourceInput">AwsS3DataSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource">GoogleStorageTransferJobTransferSpecAwsS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSourceInput">AzureBlobStorageDataSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSinkInput">GcsDataSinkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink">GoogleStorageTransferJobTransferSpecGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSourceInput">GcsDataSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource">GoogleStorageTransferJobTransferSpecGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.hdfsDataSourceInput">HdfsDataSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource">GoogleStorageTransferJobTransferSpecHdfsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.httpDataSourceInput">HttpDataSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource">GoogleStorageTransferJobTransferSpecHttpDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.objectConditionsInput">ObjectConditionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions">GoogleStorageTransferJobTransferSpecObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSinkInput">PosixDataSinkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink">GoogleStorageTransferJobTransferSpecPosixDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSourceInput">PosixDataSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource">GoogleStorageTransferJobTransferSpecPosixDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolNameInput">SinkAgentPoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolNameInput">SourceAgentPoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.transferOptionsInput">TransferOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions">GoogleStorageTransferJobTransferSpecTransferOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolName">SinkAgentPoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolName">SourceAgentPoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec">GoogleStorageTransferJobTransferSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsS3DataSource`<sup>Required</sup> <a name="AwsS3DataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.awsS3DataSource"></a>

```csharp
public GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference AwsS3DataSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference">GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference</a>

---

##### `AzureBlobStorageDataSource`<sup>Required</sup> <a name="AzureBlobStorageDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSource"></a>

```csharp
public GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference AzureBlobStorageDataSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference</a>

---

##### `GcsDataSink`<sup>Required</sup> <a name="GcsDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSink"></a>

```csharp
public GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference GcsDataSink { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference">GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference</a>

---

##### `GcsDataSource`<sup>Required</sup> <a name="GcsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSource"></a>

```csharp
public GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference GcsDataSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference">GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference</a>

---

##### `HdfsDataSource`<sup>Required</sup> <a name="HdfsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.hdfsDataSource"></a>

```csharp
public GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference HdfsDataSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference">GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference</a>

---

##### `HttpDataSource`<sup>Required</sup> <a name="HttpDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.httpDataSource"></a>

```csharp
public GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference HttpDataSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference">GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference</a>

---

##### `ObjectConditions`<sup>Required</sup> <a name="ObjectConditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.objectConditions"></a>

```csharp
public GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference ObjectConditions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference">GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference</a>

---

##### `PosixDataSink`<sup>Required</sup> <a name="PosixDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSink"></a>

```csharp
public GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference PosixDataSink { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference">GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference</a>

---

##### `PosixDataSource`<sup>Required</sup> <a name="PosixDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSource"></a>

```csharp
public GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference PosixDataSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference">GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference</a>

---

##### `TransferOptions`<sup>Required</sup> <a name="TransferOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.transferOptions"></a>

```csharp
public GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference TransferOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference">GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference</a>

---

##### `AwsS3DataSourceInput`<sup>Optional</sup> <a name="AwsS3DataSourceInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.awsS3DataSourceInput"></a>

```csharp
public GoogleStorageTransferJobTransferSpecAwsS3DataSource AwsS3DataSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource">GoogleStorageTransferJobTransferSpecAwsS3DataSource</a>

---

##### `AzureBlobStorageDataSourceInput`<sup>Optional</sup> <a name="AzureBlobStorageDataSourceInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSourceInput"></a>

```csharp
public GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource AzureBlobStorageDataSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

---

##### `GcsDataSinkInput`<sup>Optional</sup> <a name="GcsDataSinkInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSinkInput"></a>

```csharp
public GoogleStorageTransferJobTransferSpecGcsDataSink GcsDataSinkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink">GoogleStorageTransferJobTransferSpecGcsDataSink</a>

---

##### `GcsDataSourceInput`<sup>Optional</sup> <a name="GcsDataSourceInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSourceInput"></a>

```csharp
public GoogleStorageTransferJobTransferSpecGcsDataSource GcsDataSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource">GoogleStorageTransferJobTransferSpecGcsDataSource</a>

---

##### `HdfsDataSourceInput`<sup>Optional</sup> <a name="HdfsDataSourceInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.hdfsDataSourceInput"></a>

```csharp
public GoogleStorageTransferJobTransferSpecHdfsDataSource HdfsDataSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource">GoogleStorageTransferJobTransferSpecHdfsDataSource</a>

---

##### `HttpDataSourceInput`<sup>Optional</sup> <a name="HttpDataSourceInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.httpDataSourceInput"></a>

```csharp
public GoogleStorageTransferJobTransferSpecHttpDataSource HttpDataSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource">GoogleStorageTransferJobTransferSpecHttpDataSource</a>

---

##### `ObjectConditionsInput`<sup>Optional</sup> <a name="ObjectConditionsInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.objectConditionsInput"></a>

```csharp
public GoogleStorageTransferJobTransferSpecObjectConditions ObjectConditionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions">GoogleStorageTransferJobTransferSpecObjectConditions</a>

---

##### `PosixDataSinkInput`<sup>Optional</sup> <a name="PosixDataSinkInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSinkInput"></a>

```csharp
public GoogleStorageTransferJobTransferSpecPosixDataSink PosixDataSinkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink">GoogleStorageTransferJobTransferSpecPosixDataSink</a>

---

##### `PosixDataSourceInput`<sup>Optional</sup> <a name="PosixDataSourceInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSourceInput"></a>

```csharp
public GoogleStorageTransferJobTransferSpecPosixDataSource PosixDataSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource">GoogleStorageTransferJobTransferSpecPosixDataSource</a>

---

##### `SinkAgentPoolNameInput`<sup>Optional</sup> <a name="SinkAgentPoolNameInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolNameInput"></a>

```csharp
public string SinkAgentPoolNameInput { get; }
```

- *Type:* string

---

##### `SourceAgentPoolNameInput`<sup>Optional</sup> <a name="SourceAgentPoolNameInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolNameInput"></a>

```csharp
public string SourceAgentPoolNameInput { get; }
```

- *Type:* string

---

##### `TransferOptionsInput`<sup>Optional</sup> <a name="TransferOptionsInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.transferOptionsInput"></a>

```csharp
public GoogleStorageTransferJobTransferSpecTransferOptions TransferOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions">GoogleStorageTransferJobTransferSpecTransferOptions</a>

---

##### `SinkAgentPoolName`<sup>Required</sup> <a name="SinkAgentPoolName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolName"></a>

```csharp
public string SinkAgentPoolName { get; }
```

- *Type:* string

---

##### `SourceAgentPoolName`<sup>Required</sup> <a name="SourceAgentPoolName" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolName"></a>

```csharp
public string SourceAgentPoolName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobTransferSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec">GoogleStorageTransferJobTransferSpec</a>

---


### GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference <a name="GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectoryInput">RootDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectory">RootDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink">GoogleStorageTransferJobTransferSpecPosixDataSink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RootDirectoryInput`<sup>Optional</sup> <a name="RootDirectoryInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectoryInput"></a>

```csharp
public string RootDirectoryInput { get; }
```

- *Type:* string

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectory"></a>

```csharp
public string RootDirectory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobTransferSpecPosixDataSink InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink">GoogleStorageTransferJobTransferSpecPosixDataSink</a>

---


### GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference <a name="GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectoryInput">RootDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectory">RootDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource">GoogleStorageTransferJobTransferSpecPosixDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RootDirectoryInput`<sup>Optional</sup> <a name="RootDirectoryInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectoryInput"></a>

```csharp
public string RootDirectoryInput { get; }
```

- *Type:* string

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectory"></a>

```csharp
public string RootDirectory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobTransferSpecPosixDataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource">GoogleStorageTransferJobTransferSpecPosixDataSource</a>

---


### GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference <a name="GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetAcl">ResetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetGid">ResetGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetStorageClass">ResetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetSymlink">ResetSymlink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetTemporaryHold">ResetTemporaryHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetTimeCreated">ResetTimeCreated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetUid">ResetUid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcl` <a name="ResetAcl" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetAcl"></a>

```csharp
private void ResetAcl()
```

##### `ResetGid` <a name="ResetGid" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetGid"></a>

```csharp
private void ResetGid()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetStorageClass"></a>

```csharp
private void ResetStorageClass()
```

##### `ResetSymlink` <a name="ResetSymlink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetSymlink"></a>

```csharp
private void ResetSymlink()
```

##### `ResetTemporaryHold` <a name="ResetTemporaryHold" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetTemporaryHold"></a>

```csharp
private void ResetTemporaryHold()
```

##### `ResetTimeCreated` <a name="ResetTimeCreated" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetTimeCreated"></a>

```csharp
private void ResetTimeCreated()
```

##### `ResetUid` <a name="ResetUid" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetUid"></a>

```csharp
private void ResetUid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.aclInput">AclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.gidInput">GidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.symlinkInput">SymlinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHoldInput">TemporaryHoldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreatedInput">TimeCreatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.uidInput">UidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.acl">Acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.gid">Gid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.symlink">Symlink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHold">TemporaryHold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions">GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AclInput`<sup>Optional</sup> <a name="AclInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.aclInput"></a>

```csharp
public string AclInput { get; }
```

- *Type:* string

---

##### `GidInput`<sup>Optional</sup> <a name="GidInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.gidInput"></a>

```csharp
public string GidInput { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `SymlinkInput`<sup>Optional</sup> <a name="SymlinkInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.symlinkInput"></a>

```csharp
public string SymlinkInput { get; }
```

- *Type:* string

---

##### `TemporaryHoldInput`<sup>Optional</sup> <a name="TemporaryHoldInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHoldInput"></a>

```csharp
public string TemporaryHoldInput { get; }
```

- *Type:* string

---

##### `TimeCreatedInput`<sup>Optional</sup> <a name="TimeCreatedInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreatedInput"></a>

```csharp
public string TimeCreatedInput { get; }
```

- *Type:* string

---

##### `UidInput`<sup>Optional</sup> <a name="UidInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.uidInput"></a>

```csharp
public string UidInput { get; }
```

- *Type:* string

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.acl"></a>

```csharp
public string Acl { get; }
```

- *Type:* string

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.gid"></a>

```csharp
public string Gid { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `Symlink`<sup>Required</sup> <a name="Symlink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.symlink"></a>

```csharp
public string Symlink { get; }
```

- *Type:* string

---

##### `TemporaryHold`<sup>Required</sup> <a name="TemporaryHold" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHold"></a>

```csharp
public string TemporaryHold { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions">GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions</a>

---


### GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference <a name="GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.putMetadataOptions">PutMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer">ResetDeleteObjectsFromSourceAfterTransfer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink">ResetDeleteObjectsUniqueInSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetMetadataOptions">ResetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink">ResetOverwriteObjectsAlreadyExistingInSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteWhen">ResetOverwriteWhen</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetadataOptions` <a name="PutMetadataOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.putMetadataOptions"></a>

```csharp
private void PutMetadataOptions(GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions">GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions</a>

---

##### `ResetDeleteObjectsFromSourceAfterTransfer` <a name="ResetDeleteObjectsFromSourceAfterTransfer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer"></a>

```csharp
private void ResetDeleteObjectsFromSourceAfterTransfer()
```

##### `ResetDeleteObjectsUniqueInSink` <a name="ResetDeleteObjectsUniqueInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink"></a>

```csharp
private void ResetDeleteObjectsUniqueInSink()
```

##### `ResetMetadataOptions` <a name="ResetMetadataOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetMetadataOptions"></a>

```csharp
private void ResetMetadataOptions()
```

##### `ResetOverwriteObjectsAlreadyExistingInSink` <a name="ResetOverwriteObjectsAlreadyExistingInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink"></a>

```csharp
private void ResetOverwriteObjectsAlreadyExistingInSink()
```

##### `ResetOverwriteWhen` <a name="ResetOverwriteWhen" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteWhen"></a>

```csharp
private void ResetOverwriteWhen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference">GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput">DeleteObjectsFromSourceAfterTransferInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput">DeleteObjectsUniqueInSinkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.metadataOptionsInput">MetadataOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions">GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput">OverwriteObjectsAlreadyExistingInSinkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhenInput">OverwriteWhenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer">DeleteObjectsFromSourceAfterTransfer</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink">DeleteObjectsUniqueInSink</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink">OverwriteObjectsAlreadyExistingInSink</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhen">OverwriteWhen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions">GoogleStorageTransferJobTransferSpecTransferOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetadataOptions`<sup>Required</sup> <a name="MetadataOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.metadataOptions"></a>

```csharp
public GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference MetadataOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference">GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference</a>

---

##### `DeleteObjectsFromSourceAfterTransferInput`<sup>Optional</sup> <a name="DeleteObjectsFromSourceAfterTransferInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput"></a>

```csharp
public object DeleteObjectsFromSourceAfterTransferInput { get; }
```

- *Type:* object

---

##### `DeleteObjectsUniqueInSinkInput`<sup>Optional</sup> <a name="DeleteObjectsUniqueInSinkInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput"></a>

```csharp
public object DeleteObjectsUniqueInSinkInput { get; }
```

- *Type:* object

---

##### `MetadataOptionsInput`<sup>Optional</sup> <a name="MetadataOptionsInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.metadataOptionsInput"></a>

```csharp
public GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions MetadataOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions">GoogleStorageTransferJobTransferSpecTransferOptionsMetadataOptions</a>

---

##### `OverwriteObjectsAlreadyExistingInSinkInput`<sup>Optional</sup> <a name="OverwriteObjectsAlreadyExistingInSinkInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput"></a>

```csharp
public object OverwriteObjectsAlreadyExistingInSinkInput { get; }
```

- *Type:* object

---

##### `OverwriteWhenInput`<sup>Optional</sup> <a name="OverwriteWhenInput" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhenInput"></a>

```csharp
public string OverwriteWhenInput { get; }
```

- *Type:* string

---

##### `DeleteObjectsFromSourceAfterTransfer`<sup>Required</sup> <a name="DeleteObjectsFromSourceAfterTransfer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer"></a>

```csharp
public object DeleteObjectsFromSourceAfterTransfer { get; }
```

- *Type:* object

---

##### `DeleteObjectsUniqueInSink`<sup>Required</sup> <a name="DeleteObjectsUniqueInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink"></a>

```csharp
public object DeleteObjectsUniqueInSink { get; }
```

- *Type:* object

---

##### `OverwriteObjectsAlreadyExistingInSink`<sup>Required</sup> <a name="OverwriteObjectsAlreadyExistingInSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink"></a>

```csharp
public object OverwriteObjectsAlreadyExistingInSink { get; }
```

- *Type:* object

---

##### `OverwriteWhen`<sup>Required</sup> <a name="OverwriteWhen" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhen"></a>

```csharp
public string OverwriteWhen { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageTransferJobTransferSpecTransferOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions">GoogleStorageTransferJobTransferSpecTransferOptions</a>

---



