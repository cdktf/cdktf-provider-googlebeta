# `googleCloudSchedulerJob` Submodule <a name="`googleCloudSchedulerJob` Submodule" id="@cdktf/provider-google-beta.googleCloudSchedulerJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudSchedulerJob <a name="GoogleCloudSchedulerJob" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job google_cloud_scheduler_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudSchedulerJob(Construct Scope, string Id, GoogleCloudSchedulerJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig">GoogleCloudSchedulerJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig">GoogleCloudSchedulerJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putAppEngineHttpTarget">PutAppEngineHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putHttpTarget">PutHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putPubsubTarget">PutPubsubTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putRetryConfig">PutRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetAppEngineHttpTarget">ResetAppEngineHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetAttemptDeadline">ResetAttemptDeadline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetHttpTarget">ResetHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetPaused">ResetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetPubsubTarget">ResetPubsubTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetRetryConfig">ResetRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAppEngineHttpTarget` <a name="PutAppEngineHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putAppEngineHttpTarget"></a>

```csharp
private void PutAppEngineHttpTarget(GoogleCloudSchedulerJobAppEngineHttpTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putAppEngineHttpTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a>

---

##### `PutHttpTarget` <a name="PutHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putHttpTarget"></a>

```csharp
private void PutHttpTarget(GoogleCloudSchedulerJobHttpTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putHttpTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a>

---

##### `PutPubsubTarget` <a name="PutPubsubTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putPubsubTarget"></a>

```csharp
private void PutPubsubTarget(GoogleCloudSchedulerJobPubsubTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putPubsubTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a>

---

##### `PutRetryConfig` <a name="PutRetryConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putRetryConfig"></a>

```csharp
private void PutRetryConfig(GoogleCloudSchedulerJobRetryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putRetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleCloudSchedulerJobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts">GoogleCloudSchedulerJobTimeouts</a>

---

##### `ResetAppEngineHttpTarget` <a name="ResetAppEngineHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetAppEngineHttpTarget"></a>

```csharp
private void ResetAppEngineHttpTarget()
```

##### `ResetAttemptDeadline` <a name="ResetAttemptDeadline" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetAttemptDeadline"></a>

```csharp
private void ResetAttemptDeadline()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetHttpTarget` <a name="ResetHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetHttpTarget"></a>

```csharp
private void ResetHttpTarget()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPaused` <a name="ResetPaused" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetPaused"></a>

```csharp
private void ResetPaused()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPubsubTarget` <a name="ResetPubsubTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetPubsubTarget"></a>

```csharp
private void ResetPubsubTarget()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRetryConfig` <a name="ResetRetryConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetRetryConfig"></a>

```csharp
private void ResetRetryConfig()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudSchedulerJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudSchedulerJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudSchedulerJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudSchedulerJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudSchedulerJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleCloudSchedulerJob resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudSchedulerJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudSchedulerJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudSchedulerJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.appEngineHttpTarget">AppEngineHttpTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference">GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.httpTarget">HttpTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference">GoogleCloudSchedulerJobHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pubsubTarget">PubsubTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference">GoogleCloudSchedulerJobPubsubTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.retryConfig">RetryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference">GoogleCloudSchedulerJobRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference">GoogleCloudSchedulerJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.appEngineHttpTargetInput">AppEngineHttpTargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.attemptDeadlineInput">AttemptDeadlineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.httpTargetInput">HttpTargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pausedInput">PausedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pubsubTargetInput">PubsubTargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.retryConfigInput">RetryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.attemptDeadline">AttemptDeadline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.paused">Paused</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AppEngineHttpTarget`<sup>Required</sup> <a name="AppEngineHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.appEngineHttpTarget"></a>

```csharp
public GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference AppEngineHttpTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference">GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference</a>

---

##### `HttpTarget`<sup>Required</sup> <a name="HttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.httpTarget"></a>

```csharp
public GoogleCloudSchedulerJobHttpTargetOutputReference HttpTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference">GoogleCloudSchedulerJobHttpTargetOutputReference</a>

---

##### `PubsubTarget`<sup>Required</sup> <a name="PubsubTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pubsubTarget"></a>

```csharp
public GoogleCloudSchedulerJobPubsubTargetOutputReference PubsubTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference">GoogleCloudSchedulerJobPubsubTargetOutputReference</a>

---

##### `RetryConfig`<sup>Required</sup> <a name="RetryConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.retryConfig"></a>

```csharp
public GoogleCloudSchedulerJobRetryConfigOutputReference RetryConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference">GoogleCloudSchedulerJobRetryConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeouts"></a>

```csharp
public GoogleCloudSchedulerJobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference">GoogleCloudSchedulerJobTimeoutsOutputReference</a>

---

##### `AppEngineHttpTargetInput`<sup>Optional</sup> <a name="AppEngineHttpTargetInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.appEngineHttpTargetInput"></a>

```csharp
public GoogleCloudSchedulerJobAppEngineHttpTarget AppEngineHttpTargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a>

---

##### `AttemptDeadlineInput`<sup>Optional</sup> <a name="AttemptDeadlineInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.attemptDeadlineInput"></a>

```csharp
public string AttemptDeadlineInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `HttpTargetInput`<sup>Optional</sup> <a name="HttpTargetInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.httpTargetInput"></a>

```csharp
public GoogleCloudSchedulerJobHttpTarget HttpTargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PausedInput`<sup>Optional</sup> <a name="PausedInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pausedInput"></a>

```csharp
public object PausedInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PubsubTargetInput`<sup>Optional</sup> <a name="PubsubTargetInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.pubsubTargetInput"></a>

```csharp
public GoogleCloudSchedulerJobPubsubTarget PubsubTargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RetryConfigInput`<sup>Optional</sup> <a name="RetryConfigInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.retryConfigInput"></a>

```csharp
public GoogleCloudSchedulerJobRetryConfig RetryConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `AttemptDeadline`<sup>Required</sup> <a name="AttemptDeadline" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.attemptDeadline"></a>

```csharp
public string AttemptDeadline { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.paused"></a>

```csharp
public object Paused { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudSchedulerJobAppEngineHttpTarget <a name="GoogleCloudSchedulerJobAppEngineHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudSchedulerJobAppEngineHttpTarget {
    string RelativeUri,
    GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting AppEngineRouting = null,
    string Body = null,
    System.Collections.Generic.IDictionary<string, string> Headers = null,
    string HttpMethod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.relativeUri">RelativeUri</a></code> | <code>string</code> | The relative URI. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.appEngineRouting">AppEngineRouting</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a></code> | app_engine_routing block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.body">Body</a></code> | <code>string</code> | HTTP request body. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | HTTP request headers. This map contains the header field names and values. Headers can be set when the job is created. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.httpMethod">HttpMethod</a></code> | <code>string</code> | Which HTTP method to use for the request. |

---

##### `RelativeUri`<sup>Required</sup> <a name="RelativeUri" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.relativeUri"></a>

```csharp
public string RelativeUri { get; set; }
```

- *Type:* string

The relative URI.

The relative URL must begin with "/" and must be a valid HTTP relative URL.
It can contain a path, query string arguments, and # fragments.
If the relative URL is empty, then the root path "/" will be used.
No spaces are allowed, and the maximum length allowed is 2083 characters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#relative_uri GoogleCloudSchedulerJob#relative_uri}

---

##### `AppEngineRouting`<sup>Optional</sup> <a name="AppEngineRouting" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.appEngineRouting"></a>

```csharp
public GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting AppEngineRouting { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

app_engine_routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#app_engine_routing GoogleCloudSchedulerJob#app_engine_routing}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.body"></a>

```csharp
public string Body { get; set; }
```

- *Type:* string

HTTP request body.

A request body is allowed only if the HTTP method is POST or PUT.
It will result in invalid argument error to set a body on a job with an incompatible HttpMethod.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#body GoogleCloudSchedulerJob#body}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

HTTP request headers. This map contains the header field names and values. Headers can be set when the job is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#headers GoogleCloudSchedulerJob#headers}

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget.property.httpMethod"></a>

```csharp
public string HttpMethod { get; set; }
```

- *Type:* string

Which HTTP method to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#http_method GoogleCloudSchedulerJob#http_method}

---

### GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting <a name="GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting {
    string Instance = null,
    string Service = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.instance">Instance</a></code> | <code>string</code> | App instance. By default, the job is sent to an instance which is available when the job is attempted. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.service">Service</a></code> | <code>string</code> | App service. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.version">Version</a></code> | <code>string</code> | App version. |

---

##### `Instance`<sup>Optional</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

App instance. By default, the job is sent to an instance which is available when the job is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#instance GoogleCloudSchedulerJob#instance}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

App service.

By default, the job is sent to the service which is the default service when the job is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#service GoogleCloudSchedulerJob#service}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

App version.

By default, the job is sent to the version which is the default version when the job is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#version GoogleCloudSchedulerJob#version}

---

### GoogleCloudSchedulerJobConfig <a name="GoogleCloudSchedulerJobConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudSchedulerJobConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    GoogleCloudSchedulerJobAppEngineHttpTarget AppEngineHttpTarget = null,
    string AttemptDeadline = null,
    string Description = null,
    GoogleCloudSchedulerJobHttpTarget HttpTarget = null,
    string Id = null,
    object Paused = null,
    string Project = null,
    GoogleCloudSchedulerJobPubsubTarget PubsubTarget = null,
    string Region = null,
    GoogleCloudSchedulerJobRetryConfig RetryConfig = null,
    string Schedule = null,
    GoogleCloudSchedulerJobTimeouts Timeouts = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.name">Name</a></code> | <code>string</code> | The name of the job. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.appEngineHttpTarget">AppEngineHttpTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a></code> | app_engine_http_target block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.attemptDeadline">AttemptDeadline</a></code> | <code>string</code> | The deadline for job attempts. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.description">Description</a></code> | <code>string</code> | A human-readable description for the job. This string must not contain more than 500 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.httpTarget">HttpTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#id GoogleCloudSchedulerJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.paused">Paused</a></code> | <code>object</code> | Sets the job to a paused state. Jobs default to being enabled when this property is not set. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#project GoogleCloudSchedulerJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.pubsubTarget">PubsubTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a></code> | pubsub_target block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.region">Region</a></code> | <code>string</code> | Region where the scheduler job resides. If it is not provided, Terraform will use the provider default. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.retryConfig">RetryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a></code> | retry_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.schedule">Schedule</a></code> | <code>string</code> | Describes the schedule on which the job will be executed. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts">GoogleCloudSchedulerJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.timeZone">TimeZone</a></code> | <code>string</code> | Specifies the time zone to be used in interpreting schedule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#name GoogleCloudSchedulerJob#name}

---

##### `AppEngineHttpTarget`<sup>Optional</sup> <a name="AppEngineHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.appEngineHttpTarget"></a>

```csharp
public GoogleCloudSchedulerJobAppEngineHttpTarget AppEngineHttpTarget { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a>

app_engine_http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#app_engine_http_target GoogleCloudSchedulerJob#app_engine_http_target}

---

##### `AttemptDeadline`<sup>Optional</sup> <a name="AttemptDeadline" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.attemptDeadline"></a>

```csharp
public string AttemptDeadline { get; set; }
```

- *Type:* string

The deadline for job attempts.

If the request handler does not respond by this deadline then the request is
cancelled and the attempt is marked as a DEADLINE_EXCEEDED failure. The failed attempt can be viewed in
execution logs. Cloud Scheduler will retry the job according to the RetryConfig.
The allowed duration for this deadline is:

* For HTTP targets, between 15 seconds and 30 minutes.
* For App Engine HTTP targets, between 15 seconds and 24 hours.
* **Note**: For PubSub targets, this field is ignored - setting it will introduce an unresolvable diff.
  A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#attempt_deadline GoogleCloudSchedulerJob#attempt_deadline}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-readable description for the job. This string must not contain more than 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#description GoogleCloudSchedulerJob#description}

---

##### `HttpTarget`<sup>Optional</sup> <a name="HttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.httpTarget"></a>

```csharp
public GoogleCloudSchedulerJobHttpTarget HttpTarget { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#http_target GoogleCloudSchedulerJob#http_target}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#id GoogleCloudSchedulerJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Paused`<sup>Optional</sup> <a name="Paused" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.paused"></a>

```csharp
public object Paused { get; set; }
```

- *Type:* object

Sets the job to a paused state. Jobs default to being enabled when this property is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#paused GoogleCloudSchedulerJob#paused}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#project GoogleCloudSchedulerJob#project}.

---

##### `PubsubTarget`<sup>Optional</sup> <a name="PubsubTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.pubsubTarget"></a>

```csharp
public GoogleCloudSchedulerJobPubsubTarget PubsubTarget { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a>

pubsub_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#pubsub_target GoogleCloudSchedulerJob#pubsub_target}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where the scheduler job resides. If it is not provided, Terraform will use the provider default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#region GoogleCloudSchedulerJob#region}

---

##### `RetryConfig`<sup>Optional</sup> <a name="RetryConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.retryConfig"></a>

```csharp
public GoogleCloudSchedulerJobRetryConfig RetryConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a>

retry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#retry_config GoogleCloudSchedulerJob#retry_config}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

Describes the schedule on which the job will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#schedule GoogleCloudSchedulerJob#schedule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.timeouts"></a>

```csharp
public GoogleCloudSchedulerJobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts">GoogleCloudSchedulerJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#timeouts GoogleCloudSchedulerJob#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobConfig.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Specifies the time zone to be used in interpreting schedule.

The value of this field must be a time zone name from the tz database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#time_zone GoogleCloudSchedulerJob#time_zone}

---

### GoogleCloudSchedulerJobHttpTarget <a name="GoogleCloudSchedulerJobHttpTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudSchedulerJobHttpTarget {
    string Uri,
    string Body = null,
    System.Collections.Generic.IDictionary<string, string> Headers = null,
    string HttpMethod = null,
    GoogleCloudSchedulerJobHttpTargetOauthToken OauthToken = null,
    GoogleCloudSchedulerJobHttpTargetOidcToken OidcToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.uri">Uri</a></code> | <code>string</code> | The full URI path that the request will be sent to. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.body">Body</a></code> | <code>string</code> | HTTP request body. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | This map contains the header field names and values. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.httpMethod">HttpMethod</a></code> | <code>string</code> | Which HTTP method to use for the request. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.oauthToken">OauthToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a></code> | oauth_token block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.oidcToken">OidcToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a></code> | oidc_token block. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

The full URI path that the request will be sent to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#uri GoogleCloudSchedulerJob#uri}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.body"></a>

```csharp
public string Body { get; set; }
```

- *Type:* string

HTTP request body.

A request body is allowed only if the HTTP method is POST, PUT, or PATCH.
It is an error to set body on a job with an incompatible HttpMethod.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#body GoogleCloudSchedulerJob#body}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

This map contains the header field names and values.

Repeated headers are not supported, but a header value can contain commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#headers GoogleCloudSchedulerJob#headers}

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.httpMethod"></a>

```csharp
public string HttpMethod { get; set; }
```

- *Type:* string

Which HTTP method to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#http_method GoogleCloudSchedulerJob#http_method}

---

##### `OauthToken`<sup>Optional</sup> <a name="OauthToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.oauthToken"></a>

```csharp
public GoogleCloudSchedulerJobHttpTargetOauthToken OauthToken { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a>

oauth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#oauth_token GoogleCloudSchedulerJob#oauth_token}

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget.property.oidcToken"></a>

```csharp
public GoogleCloudSchedulerJobHttpTargetOidcToken OidcToken { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#oidc_token GoogleCloudSchedulerJob#oidc_token}

---

### GoogleCloudSchedulerJobHttpTargetOauthToken <a name="GoogleCloudSchedulerJobHttpTargetOauthToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudSchedulerJobHttpTargetOauthToken {
    string ServiceAccountEmail,
    string Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | Service account email to be used for generating OAuth token. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken.property.scope">Scope</a></code> | <code>string</code> | OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used. |

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; set; }
```

- *Type:* string

Service account email to be used for generating OAuth token.

The service account must be within the same project as the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#service_account_email GoogleCloudSchedulerJob#service_account_email}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#scope GoogleCloudSchedulerJob#scope}

---

### GoogleCloudSchedulerJobHttpTargetOidcToken <a name="GoogleCloudSchedulerJobHttpTargetOidcToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudSchedulerJobHttpTargetOidcToken {
    string ServiceAccountEmail,
    string Audience = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | Service account email to be used for generating OAuth token. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken.property.audience">Audience</a></code> | <code>string</code> | Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used. |

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; set; }
```

- *Type:* string

Service account email to be used for generating OAuth token.

The service account must be within the same project as the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#service_account_email GoogleCloudSchedulerJob#service_account_email}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken.property.audience"></a>

```csharp
public string Audience { get; set; }
```

- *Type:* string

Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#audience GoogleCloudSchedulerJob#audience}

---

### GoogleCloudSchedulerJobPubsubTarget <a name="GoogleCloudSchedulerJobPubsubTarget" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudSchedulerJobPubsubTarget {
    string TopicName,
    System.Collections.Generic.IDictionary<string, string> Attributes = null,
    string Data = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.topicName">TopicName</a></code> | <code>string</code> | The full resource name for the Cloud Pub/Sub topic to which messages will be published when a job is delivered. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Attributes for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.data">Data</a></code> | <code>string</code> | The message payload for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute. |

---

##### `TopicName`<sup>Required</sup> <a name="TopicName" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.topicName"></a>

```csharp
public string TopicName { get; set; }
```

- *Type:* string

The full resource name for the Cloud Pub/Sub topic to which messages will be published when a job is delivered.

~>**NOTE:**
The topic name must be in the same format as required by PubSub's
PublishRequest.name, e.g. 'projects/my-project/topics/my-topic'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#topic_name GoogleCloudSchedulerJob#topic_name}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Attributes for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#attributes GoogleCloudSchedulerJob#attributes}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget.property.data"></a>

```csharp
public string Data { get; set; }
```

- *Type:* string

The message payload for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#data GoogleCloudSchedulerJob#data}

---

### GoogleCloudSchedulerJobRetryConfig <a name="GoogleCloudSchedulerJobRetryConfig" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudSchedulerJobRetryConfig {
    string MaxBackoffDuration = null,
    double MaxDoublings = null,
    string MaxRetryDuration = null,
    string MinBackoffDuration = null,
    double RetryCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxBackoffDuration">MaxBackoffDuration</a></code> | <code>string</code> | The maximum amount of time to wait before retrying a job after it fails. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxDoublings">MaxDoublings</a></code> | <code>double</code> | The time between retries will double maxDoublings times. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxRetryDuration">MaxRetryDuration</a></code> | <code>string</code> | The time limit for retrying a failed job, measured from time when an execution was first attempted. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.minBackoffDuration">MinBackoffDuration</a></code> | <code>string</code> | The minimum amount of time to wait before retrying a job after it fails. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.retryCount">RetryCount</a></code> | <code>double</code> | The number of attempts that the system will make to run a job using the exponential backoff procedure described by maxDoublings. |

---

##### `MaxBackoffDuration`<sup>Optional</sup> <a name="MaxBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxBackoffDuration"></a>

```csharp
public string MaxBackoffDuration { get; set; }
```

- *Type:* string

The maximum amount of time to wait before retrying a job after it fails.

A duration in seconds with up to nine fractional digits, terminated by 's'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#max_backoff_duration GoogleCloudSchedulerJob#max_backoff_duration}

---

##### `MaxDoublings`<sup>Optional</sup> <a name="MaxDoublings" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxDoublings"></a>

```csharp
public double MaxDoublings { get; set; }
```

- *Type:* double

The time between retries will double maxDoublings times.

A job's retry interval starts at minBackoffDuration,
then doubles maxDoublings times, then increases linearly,
and finally retries retries at intervals of maxBackoffDuration up to retryCount times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#max_doublings GoogleCloudSchedulerJob#max_doublings}

---

##### `MaxRetryDuration`<sup>Optional</sup> <a name="MaxRetryDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.maxRetryDuration"></a>

```csharp
public string MaxRetryDuration { get; set; }
```

- *Type:* string

The time limit for retrying a failed job, measured from time when an execution was first attempted.

If specified with retryCount, the job will be retried until both limits are reached.
A duration in seconds with up to nine fractional digits, terminated by 's'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#max_retry_duration GoogleCloudSchedulerJob#max_retry_duration}

---

##### `MinBackoffDuration`<sup>Optional</sup> <a name="MinBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.minBackoffDuration"></a>

```csharp
public string MinBackoffDuration { get; set; }
```

- *Type:* string

The minimum amount of time to wait before retrying a job after it fails.

A duration in seconds with up to nine fractional digits, terminated by 's'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#min_backoff_duration GoogleCloudSchedulerJob#min_backoff_duration}

---

##### `RetryCount`<sup>Optional</sup> <a name="RetryCount" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig.property.retryCount"></a>

```csharp
public double RetryCount { get; set; }
```

- *Type:* double

The number of attempts that the system will make to run a job using the exponential backoff procedure described by maxDoublings.

Values greater than 5 and negative values are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#retry_count GoogleCloudSchedulerJob#retry_count}

---

### GoogleCloudSchedulerJobTimeouts <a name="GoogleCloudSchedulerJobTimeouts" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudSchedulerJobTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#create GoogleCloudSchedulerJob#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#delete GoogleCloudSchedulerJob#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#update GoogleCloudSchedulerJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#create GoogleCloudSchedulerJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#delete GoogleCloudSchedulerJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_cloud_scheduler_job#update GoogleCloudSchedulerJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference <a name="GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetInstance">ResetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstance` <a name="ResetInstance" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetInstance"></a>

```csharp
private void ResetInstance()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetService"></a>

```csharp
private void ResetService()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

---


### GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference <a name="GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.putAppEngineRouting">PutAppEngineRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetAppEngineRouting">ResetAppEngineRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAppEngineRouting` <a name="PutAppEngineRouting" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.putAppEngineRouting"></a>

```csharp
private void PutAppEngineRouting(GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.putAppEngineRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

---

##### `ResetAppEngineRouting` <a name="ResetAppEngineRouting" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetAppEngineRouting"></a>

```csharp
private void ResetAppEngineRouting()
```

##### `ResetBody` <a name="ResetBody" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.resetHttpMethod"></a>

```csharp
private void ResetHttpMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRouting">AppEngineRouting</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRoutingInput">AppEngineRoutingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.bodyInput">BodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.headersInput">HeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUriInput">RelativeUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUri">RelativeUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppEngineRouting`<sup>Required</sup> <a name="AppEngineRouting" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRouting"></a>

```csharp
public GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference AppEngineRouting { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference</a>

---

##### `AppEngineRoutingInput`<sup>Optional</sup> <a name="AppEngineRoutingInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRoutingInput"></a>

```csharp
public GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting AppEngineRoutingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting">GoogleCloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.bodyInput"></a>

```csharp
public string BodyInput { get; }
```

- *Type:* string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.headersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethodInput"></a>

```csharp
public string HttpMethodInput { get; }
```

- *Type:* string

---

##### `RelativeUriInput`<sup>Optional</sup> <a name="RelativeUriInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUriInput"></a>

```csharp
public string RelativeUriInput { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `RelativeUri`<sup>Required</sup> <a name="RelativeUri" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUri"></a>

```csharp
public string RelativeUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTargetOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudSchedulerJobAppEngineHttpTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobAppEngineHttpTarget">GoogleCloudSchedulerJobAppEngineHttpTarget</a>

---


### GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference <a name="GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput"></a>

```csharp
public string ServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudSchedulerJobHttpTargetOauthToken InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a>

---


### GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference <a name="GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.resetAudience">ResetAudience</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.resetAudience"></a>

```csharp
private void ResetAudience()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audienceInput">AudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audienceInput"></a>

```csharp
public string AudienceInput { get; }
```

- *Type:* string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```csharp
public string ServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudSchedulerJobHttpTargetOidcToken InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a>

---


### GoogleCloudSchedulerJobHttpTargetOutputReference <a name="GoogleCloudSchedulerJobHttpTargetOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudSchedulerJobHttpTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOauthToken">PutOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOidcToken">PutOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetOauthToken">ResetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetOidcToken">ResetOidcToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOauthToken` <a name="PutOauthToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOauthToken"></a>

```csharp
private void PutOauthToken(GoogleCloudSchedulerJobHttpTargetOauthToken Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOauthToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a>

---

##### `PutOidcToken` <a name="PutOidcToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOidcToken"></a>

```csharp
private void PutOidcToken(GoogleCloudSchedulerJobHttpTargetOidcToken Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.putOidcToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a>

---

##### `ResetBody` <a name="ResetBody" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetHttpMethod"></a>

```csharp
private void ResetHttpMethod()
```

##### `ResetOauthToken` <a name="ResetOauthToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetOauthToken"></a>

```csharp
private void ResetOauthToken()
```

##### `ResetOidcToken` <a name="ResetOidcToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.resetOidcToken"></a>

```csharp
private void ResetOidcToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oauthToken">OauthToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference">GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oidcToken">OidcToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference">GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.bodyInput">BodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.headersInput">HeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oauthTokenInput">OauthTokenInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oidcTokenInput">OidcTokenInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OauthToken`<sup>Required</sup> <a name="OauthToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oauthToken"></a>

```csharp
public GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference OauthToken { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference">GoogleCloudSchedulerJobHttpTargetOauthTokenOutputReference</a>

---

##### `OidcToken`<sup>Required</sup> <a name="OidcToken" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oidcToken"></a>

```csharp
public GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference OidcToken { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference">GoogleCloudSchedulerJobHttpTargetOidcTokenOutputReference</a>

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.bodyInput"></a>

```csharp
public string BodyInput { get; }
```

- *Type:* string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.headersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.httpMethodInput"></a>

```csharp
public string HttpMethodInput { get; }
```

- *Type:* string

---

##### `OauthTokenInput`<sup>Optional</sup> <a name="OauthTokenInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oauthTokenInput"></a>

```csharp
public GoogleCloudSchedulerJobHttpTargetOauthToken OauthTokenInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOauthToken">GoogleCloudSchedulerJobHttpTargetOauthToken</a>

---

##### `OidcTokenInput`<sup>Optional</sup> <a name="OidcTokenInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.oidcTokenInput"></a>

```csharp
public GoogleCloudSchedulerJobHttpTargetOidcToken OidcTokenInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOidcToken">GoogleCloudSchedulerJobHttpTargetOidcToken</a>

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTargetOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudSchedulerJobHttpTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobHttpTarget">GoogleCloudSchedulerJobHttpTarget</a>

---


### GoogleCloudSchedulerJobPubsubTargetOutputReference <a name="GoogleCloudSchedulerJobPubsubTargetOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudSchedulerJobPubsubTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resetData">ResetData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.resetData"></a>

```csharp
private void ResetData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.attributesInput">AttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.dataInput">DataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.topicNameInput">TopicNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.topicName">TopicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.attributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.dataInput"></a>

```csharp
public string DataInput { get; }
```

- *Type:* string

---

##### `TopicNameInput`<sup>Optional</sup> <a name="TopicNameInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.topicNameInput"></a>

```csharp
public string TopicNameInput { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `TopicName`<sup>Required</sup> <a name="TopicName" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.topicName"></a>

```csharp
public string TopicName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTargetOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudSchedulerJobPubsubTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobPubsubTarget">GoogleCloudSchedulerJobPubsubTarget</a>

---


### GoogleCloudSchedulerJobRetryConfigOutputReference <a name="GoogleCloudSchedulerJobRetryConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudSchedulerJobRetryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxBackoffDuration">ResetMaxBackoffDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxDoublings">ResetMaxDoublings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxRetryDuration">ResetMaxRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMinBackoffDuration">ResetMinBackoffDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetRetryCount">ResetRetryCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxBackoffDuration` <a name="ResetMaxBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxBackoffDuration"></a>

```csharp
private void ResetMaxBackoffDuration()
```

##### `ResetMaxDoublings` <a name="ResetMaxDoublings" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxDoublings"></a>

```csharp
private void ResetMaxDoublings()
```

##### `ResetMaxRetryDuration` <a name="ResetMaxRetryDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMaxRetryDuration"></a>

```csharp
private void ResetMaxRetryDuration()
```

##### `ResetMinBackoffDuration` <a name="ResetMinBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetMinBackoffDuration"></a>

```csharp
private void ResetMinBackoffDuration()
```

##### `ResetRetryCount` <a name="ResetRetryCount" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.resetRetryCount"></a>

```csharp
private void ResetRetryCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDurationInput">MaxBackoffDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxDoublingsInput">MaxDoublingsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxRetryDurationInput">MaxRetryDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.minBackoffDurationInput">MinBackoffDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.retryCountInput">RetryCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDuration">MaxBackoffDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxDoublings">MaxDoublings</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxRetryDuration">MaxRetryDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.minBackoffDuration">MinBackoffDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.retryCount">RetryCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxBackoffDurationInput`<sup>Optional</sup> <a name="MaxBackoffDurationInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDurationInput"></a>

```csharp
public string MaxBackoffDurationInput { get; }
```

- *Type:* string

---

##### `MaxDoublingsInput`<sup>Optional</sup> <a name="MaxDoublingsInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxDoublingsInput"></a>

```csharp
public double MaxDoublingsInput { get; }
```

- *Type:* double

---

##### `MaxRetryDurationInput`<sup>Optional</sup> <a name="MaxRetryDurationInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxRetryDurationInput"></a>

```csharp
public string MaxRetryDurationInput { get; }
```

- *Type:* string

---

##### `MinBackoffDurationInput`<sup>Optional</sup> <a name="MinBackoffDurationInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.minBackoffDurationInput"></a>

```csharp
public string MinBackoffDurationInput { get; }
```

- *Type:* string

---

##### `RetryCountInput`<sup>Optional</sup> <a name="RetryCountInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.retryCountInput"></a>

```csharp
public double RetryCountInput { get; }
```

- *Type:* double

---

##### `MaxBackoffDuration`<sup>Required</sup> <a name="MaxBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDuration"></a>

```csharp
public string MaxBackoffDuration { get; }
```

- *Type:* string

---

##### `MaxDoublings`<sup>Required</sup> <a name="MaxDoublings" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxDoublings"></a>

```csharp
public double MaxDoublings { get; }
```

- *Type:* double

---

##### `MaxRetryDuration`<sup>Required</sup> <a name="MaxRetryDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.maxRetryDuration"></a>

```csharp
public string MaxRetryDuration { get; }
```

- *Type:* string

---

##### `MinBackoffDuration`<sup>Required</sup> <a name="MinBackoffDuration" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.minBackoffDuration"></a>

```csharp
public string MinBackoffDuration { get; }
```

- *Type:* string

---

##### `RetryCount`<sup>Required</sup> <a name="RetryCount" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.retryCount"></a>

```csharp
public double RetryCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudSchedulerJobRetryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobRetryConfig">GoogleCloudSchedulerJobRetryConfig</a>

---


### GoogleCloudSchedulerJobTimeoutsOutputReference <a name="GoogleCloudSchedulerJobTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudSchedulerJobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudSchedulerJob.GoogleCloudSchedulerJobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



