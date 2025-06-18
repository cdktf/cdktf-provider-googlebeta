# `googleStorageBatchOperationsJob` Submodule <a name="`googleStorageBatchOperationsJob` Submodule" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageBatchOperationsJob <a name="GoogleStorageBatchOperationsJob" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job google_storage_batch_operations_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBatchOperationsJob(Construct Scope, string Id, GoogleStorageBatchOperationsJobConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig">GoogleStorageBatchOperationsJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig">GoogleStorageBatchOperationsJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putBucketList">PutBucketList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putDeleteObject">PutDeleteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putPutMetadata">PutPutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putPutObjectHold">PutPutObjectHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putRewriteObject">PutRewriteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetBucketList">ResetBucketList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetDeleteObject">ResetDeleteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetDeleteProtection">ResetDeleteProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetJobId">ResetJobId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetPutMetadata">ResetPutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetPutObjectHold">ResetPutObjectHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetRewriteObject">ResetRewriteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBucketList` <a name="PutBucketList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putBucketList"></a>

```csharp
private void PutBucketList(GoogleStorageBatchOperationsJobBucketListStruct Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putBucketList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct">GoogleStorageBatchOperationsJobBucketListStruct</a>

---

##### `PutDeleteObject` <a name="PutDeleteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putDeleteObject"></a>

```csharp
private void PutDeleteObject(GoogleStorageBatchOperationsJobDeleteObject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putDeleteObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject">GoogleStorageBatchOperationsJobDeleteObject</a>

---

##### `PutPutMetadata` <a name="PutPutMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putPutMetadata"></a>

```csharp
private void PutPutMetadata(GoogleStorageBatchOperationsJobPutMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putPutMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata">GoogleStorageBatchOperationsJobPutMetadata</a>

---

##### `PutPutObjectHold` <a name="PutPutObjectHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putPutObjectHold"></a>

```csharp
private void PutPutObjectHold(GoogleStorageBatchOperationsJobPutObjectHold Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putPutObjectHold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold">GoogleStorageBatchOperationsJobPutObjectHold</a>

---

##### `PutRewriteObject` <a name="PutRewriteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putRewriteObject"></a>

```csharp
private void PutRewriteObject(GoogleStorageBatchOperationsJobRewriteObject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putRewriteObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject">GoogleStorageBatchOperationsJobRewriteObject</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleStorageBatchOperationsJobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts">GoogleStorageBatchOperationsJobTimeouts</a>

---

##### `ResetBucketList` <a name="ResetBucketList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetBucketList"></a>

```csharp
private void ResetBucketList()
```

##### `ResetDeleteObject` <a name="ResetDeleteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetDeleteObject"></a>

```csharp
private void ResetDeleteObject()
```

##### `ResetDeleteProtection` <a name="ResetDeleteProtection" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetDeleteProtection"></a>

```csharp
private void ResetDeleteProtection()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetJobId` <a name="ResetJobId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetJobId"></a>

```csharp
private void ResetJobId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPutMetadata` <a name="ResetPutMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetPutMetadata"></a>

```csharp
private void ResetPutMetadata()
```

##### `ResetPutObjectHold` <a name="ResetPutObjectHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetPutObjectHold"></a>

```csharp
private void ResetPutObjectHold()
```

##### `ResetRewriteObject` <a name="ResetRewriteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetRewriteObject"></a>

```csharp
private void ResetRewriteObject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleStorageBatchOperationsJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageBatchOperationsJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageBatchOperationsJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageBatchOperationsJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageBatchOperationsJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleStorageBatchOperationsJob resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleStorageBatchOperationsJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleStorageBatchOperationsJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageBatchOperationsJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.bucketList">BucketList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference">GoogleStorageBatchOperationsJobBucketListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.completeTime">CompleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteObject">DeleteObject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference">GoogleStorageBatchOperationsJobDeleteObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putMetadata">PutMetadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference">GoogleStorageBatchOperationsJobPutMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putObjectHold">PutObjectHold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference">GoogleStorageBatchOperationsJobPutObjectHoldOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.rewriteObject">RewriteObject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference">GoogleStorageBatchOperationsJobRewriteObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.scheduleTime">ScheduleTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference">GoogleStorageBatchOperationsJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.bucketListInput">BucketListInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct">GoogleStorageBatchOperationsJobBucketListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteObjectInput">DeleteObjectInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject">GoogleStorageBatchOperationsJobDeleteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteProtectionInput">DeleteProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.jobIdInput">JobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putMetadataInput">PutMetadataInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata">GoogleStorageBatchOperationsJobPutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putObjectHoldInput">PutObjectHoldInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold">GoogleStorageBatchOperationsJobPutObjectHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.rewriteObjectInput">RewriteObjectInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject">GoogleStorageBatchOperationsJobRewriteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteProtection">DeleteProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.jobId">JobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BucketList`<sup>Required</sup> <a name="BucketList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.bucketList"></a>

```csharp
public GoogleStorageBatchOperationsJobBucketListStructOutputReference BucketList { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference">GoogleStorageBatchOperationsJobBucketListStructOutputReference</a>

---

##### `CompleteTime`<sup>Required</sup> <a name="CompleteTime" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.completeTime"></a>

```csharp
public string CompleteTime { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeleteObject`<sup>Required</sup> <a name="DeleteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteObject"></a>

```csharp
public GoogleStorageBatchOperationsJobDeleteObjectOutputReference DeleteObject { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference">GoogleStorageBatchOperationsJobDeleteObjectOutputReference</a>

---

##### `PutMetadata`<sup>Required</sup> <a name="PutMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putMetadata"></a>

```csharp
public GoogleStorageBatchOperationsJobPutMetadataOutputReference PutMetadata { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference">GoogleStorageBatchOperationsJobPutMetadataOutputReference</a>

---

##### `PutObjectHold`<sup>Required</sup> <a name="PutObjectHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putObjectHold"></a>

```csharp
public GoogleStorageBatchOperationsJobPutObjectHoldOutputReference PutObjectHold { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference">GoogleStorageBatchOperationsJobPutObjectHoldOutputReference</a>

---

##### `RewriteObject`<sup>Required</sup> <a name="RewriteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.rewriteObject"></a>

```csharp
public GoogleStorageBatchOperationsJobRewriteObjectOutputReference RewriteObject { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference">GoogleStorageBatchOperationsJobRewriteObjectOutputReference</a>

---

##### `ScheduleTime`<sup>Required</sup> <a name="ScheduleTime" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.scheduleTime"></a>

```csharp
public string ScheduleTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.timeouts"></a>

```csharp
public GoogleStorageBatchOperationsJobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference">GoogleStorageBatchOperationsJobTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `BucketListInput`<sup>Optional</sup> <a name="BucketListInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.bucketListInput"></a>

```csharp
public GoogleStorageBatchOperationsJobBucketListStruct BucketListInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct">GoogleStorageBatchOperationsJobBucketListStruct</a>

---

##### `DeleteObjectInput`<sup>Optional</sup> <a name="DeleteObjectInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteObjectInput"></a>

```csharp
public GoogleStorageBatchOperationsJobDeleteObject DeleteObjectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject">GoogleStorageBatchOperationsJobDeleteObject</a>

---

##### `DeleteProtectionInput`<sup>Optional</sup> <a name="DeleteProtectionInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteProtectionInput"></a>

```csharp
public object DeleteProtectionInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JobIdInput`<sup>Optional</sup> <a name="JobIdInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.jobIdInput"></a>

```csharp
public string JobIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PutMetadataInput`<sup>Optional</sup> <a name="PutMetadataInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putMetadataInput"></a>

```csharp
public GoogleStorageBatchOperationsJobPutMetadata PutMetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata">GoogleStorageBatchOperationsJobPutMetadata</a>

---

##### `PutObjectHoldInput`<sup>Optional</sup> <a name="PutObjectHoldInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putObjectHoldInput"></a>

```csharp
public GoogleStorageBatchOperationsJobPutObjectHold PutObjectHoldInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold">GoogleStorageBatchOperationsJobPutObjectHold</a>

---

##### `RewriteObjectInput`<sup>Optional</sup> <a name="RewriteObjectInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.rewriteObjectInput"></a>

```csharp
public GoogleStorageBatchOperationsJobRewriteObject RewriteObjectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject">GoogleStorageBatchOperationsJobRewriteObject</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DeleteProtection`<sup>Required</sup> <a name="DeleteProtection" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteProtection"></a>

```csharp
public object DeleteProtection { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.jobId"></a>

```csharp
public string JobId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageBatchOperationsJobBucketListBuckets <a name="GoogleStorageBatchOperationsJobBucketListBuckets" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBatchOperationsJobBucketListBuckets {
    string Bucket,
    GoogleStorageBatchOperationsJobBucketListBucketsManifest Manifest = null,
    GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct PrefixList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets.property.bucket">Bucket</a></code> | <code>string</code> | Bucket name for the objects to be transformed. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets.property.manifest">Manifest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest">GoogleStorageBatchOperationsJobBucketListBucketsManifest</a></code> | manifest block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets.property.prefixList">PrefixList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct</a></code> | prefix_list block. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Bucket name for the objects to be transformed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#bucket GoogleStorageBatchOperationsJob#bucket}

---

##### `Manifest`<sup>Optional</sup> <a name="Manifest" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets.property.manifest"></a>

```csharp
public GoogleStorageBatchOperationsJobBucketListBucketsManifest Manifest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest">GoogleStorageBatchOperationsJobBucketListBucketsManifest</a>

manifest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#manifest GoogleStorageBatchOperationsJob#manifest}

---

##### `PrefixList`<sup>Optional</sup> <a name="PrefixList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets.property.prefixList"></a>

```csharp
public GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct PrefixList { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

prefix_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#prefix_list GoogleStorageBatchOperationsJob#prefix_list}

---

### GoogleStorageBatchOperationsJobBucketListBucketsManifest <a name="GoogleStorageBatchOperationsJobBucketListBucketsManifest" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBatchOperationsJobBucketListBucketsManifest {
    string ManifestLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest.property.manifestLocation">ManifestLocation</a></code> | <code>string</code> | Specifies objects in a manifest file. |

---

##### `ManifestLocation`<sup>Optional</sup> <a name="ManifestLocation" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest.property.manifestLocation"></a>

```csharp
public string ManifestLocation { get; set; }
```

- *Type:* string

Specifies objects in a manifest file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#manifest_location GoogleStorageBatchOperationsJob#manifest_location}

---

### GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct <a name="GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct {
    string[] IncludedObjectPrefixes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct.property.includedObjectPrefixes">IncludedObjectPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#included_object_prefixes GoogleStorageBatchOperationsJob#included_object_prefixes}. |

---

##### `IncludedObjectPrefixes`<sup>Optional</sup> <a name="IncludedObjectPrefixes" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct.property.includedObjectPrefixes"></a>

```csharp
public string[] IncludedObjectPrefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#included_object_prefixes GoogleStorageBatchOperationsJob#included_object_prefixes}.

---

### GoogleStorageBatchOperationsJobBucketListStruct <a name="GoogleStorageBatchOperationsJobBucketListStruct" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBatchOperationsJobBucketListStruct {
    GoogleStorageBatchOperationsJobBucketListBuckets Buckets
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct.property.buckets">Buckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets">GoogleStorageBatchOperationsJobBucketListBuckets</a></code> | buckets block. |

---

##### `Buckets`<sup>Required</sup> <a name="Buckets" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct.property.buckets"></a>

```csharp
public GoogleStorageBatchOperationsJobBucketListBuckets Buckets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets">GoogleStorageBatchOperationsJobBucketListBuckets</a>

buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#buckets GoogleStorageBatchOperationsJob#buckets}

---

### GoogleStorageBatchOperationsJobConfig <a name="GoogleStorageBatchOperationsJobConfig" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBatchOperationsJobConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleStorageBatchOperationsJobBucketListStruct BucketList = null,
    GoogleStorageBatchOperationsJobDeleteObject DeleteObject = null,
    object DeleteProtection = null,
    string Id = null,
    string JobId = null,
    string Project = null,
    GoogleStorageBatchOperationsJobPutMetadata PutMetadata = null,
    GoogleStorageBatchOperationsJobPutObjectHold PutObjectHold = null,
    GoogleStorageBatchOperationsJobRewriteObject RewriteObject = null,
    GoogleStorageBatchOperationsJobTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.bucketList">BucketList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct">GoogleStorageBatchOperationsJobBucketListStruct</a></code> | bucket_list block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.deleteObject">DeleteObject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject">GoogleStorageBatchOperationsJobDeleteObject</a></code> | delete_object block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.deleteProtection">DeleteProtection</a></code> | <code>object</code> | If set to 'true', the storage batch operation job will not be deleted and new job will be created. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#id GoogleStorageBatchOperationsJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.jobId">JobId</a></code> | <code>string</code> | The ID of the job. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#project GoogleStorageBatchOperationsJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.putMetadata">PutMetadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata">GoogleStorageBatchOperationsJobPutMetadata</a></code> | put_metadata block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.putObjectHold">PutObjectHold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold">GoogleStorageBatchOperationsJobPutObjectHold</a></code> | put_object_hold block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.rewriteObject">RewriteObject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject">GoogleStorageBatchOperationsJobRewriteObject</a></code> | rewrite_object block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts">GoogleStorageBatchOperationsJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BucketList`<sup>Optional</sup> <a name="BucketList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.bucketList"></a>

```csharp
public GoogleStorageBatchOperationsJobBucketListStruct BucketList { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct">GoogleStorageBatchOperationsJobBucketListStruct</a>

bucket_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#bucket_list GoogleStorageBatchOperationsJob#bucket_list}

---

##### `DeleteObject`<sup>Optional</sup> <a name="DeleteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.deleteObject"></a>

```csharp
public GoogleStorageBatchOperationsJobDeleteObject DeleteObject { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject">GoogleStorageBatchOperationsJobDeleteObject</a>

delete_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#delete_object GoogleStorageBatchOperationsJob#delete_object}

---

##### `DeleteProtection`<sup>Optional</sup> <a name="DeleteProtection" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.deleteProtection"></a>

```csharp
public object DeleteProtection { get; set; }
```

- *Type:* object

If set to 'true', the storage batch operation job will not be deleted and new job will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#delete_protection GoogleStorageBatchOperationsJob#delete_protection}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#id GoogleStorageBatchOperationsJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JobId`<sup>Optional</sup> <a name="JobId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.jobId"></a>

```csharp
public string JobId { get; set; }
```

- *Type:* string

The ID of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#job_id GoogleStorageBatchOperationsJob#job_id}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#project GoogleStorageBatchOperationsJob#project}.

---

##### `PutMetadata`<sup>Optional</sup> <a name="PutMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.putMetadata"></a>

```csharp
public GoogleStorageBatchOperationsJobPutMetadata PutMetadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata">GoogleStorageBatchOperationsJobPutMetadata</a>

put_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#put_metadata GoogleStorageBatchOperationsJob#put_metadata}

---

##### `PutObjectHold`<sup>Optional</sup> <a name="PutObjectHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.putObjectHold"></a>

```csharp
public GoogleStorageBatchOperationsJobPutObjectHold PutObjectHold { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold">GoogleStorageBatchOperationsJobPutObjectHold</a>

put_object_hold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#put_object_hold GoogleStorageBatchOperationsJob#put_object_hold}

---

##### `RewriteObject`<sup>Optional</sup> <a name="RewriteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.rewriteObject"></a>

```csharp
public GoogleStorageBatchOperationsJobRewriteObject RewriteObject { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject">GoogleStorageBatchOperationsJobRewriteObject</a>

rewrite_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#rewrite_object GoogleStorageBatchOperationsJob#rewrite_object}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.timeouts"></a>

```csharp
public GoogleStorageBatchOperationsJobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts">GoogleStorageBatchOperationsJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#timeouts GoogleStorageBatchOperationsJob#timeouts}

---

### GoogleStorageBatchOperationsJobDeleteObject <a name="GoogleStorageBatchOperationsJobDeleteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBatchOperationsJobDeleteObject {
    object PermanentObjectDeletionEnabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject.property.permanentObjectDeletionEnabled">PermanentObjectDeletionEnabled</a></code> | <code>object</code> | enable flag to permanently delete object and all object versions if versioning is enabled on bucket. |

---

##### `PermanentObjectDeletionEnabled`<sup>Required</sup> <a name="PermanentObjectDeletionEnabled" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject.property.permanentObjectDeletionEnabled"></a>

```csharp
public object PermanentObjectDeletionEnabled { get; set; }
```

- *Type:* object

enable flag to permanently delete object and all object versions if versioning is enabled on bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#permanent_object_deletion_enabled GoogleStorageBatchOperationsJob#permanent_object_deletion_enabled}

---

### GoogleStorageBatchOperationsJobPutMetadata <a name="GoogleStorageBatchOperationsJobPutMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBatchOperationsJobPutMetadata {
    string CacheControl = null,
    string ContentDisposition = null,
    string ContentEncoding = null,
    string ContentLanguage = null,
    string ContentType = null,
    System.Collections.Generic.IDictionary<string, string> CustomMetadata = null,
    string CustomTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.cacheControl">CacheControl</a></code> | <code>string</code> | Cache-Control directive to specify caching behavior of object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | Content-Disposition of the object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | Content Encoding of the object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentLanguage">ContentLanguage</a></code> | <code>string</code> | Content-Language of the object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentType">ContentType</a></code> | <code>string</code> | Content-Type of the object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.customMetadata">CustomMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-provided metadata, in key/value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.customTime">CustomTime</a></code> | <code>string</code> | Updates the objects fixed custom time metadata. |

---

##### `CacheControl`<sup>Optional</sup> <a name="CacheControl" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.cacheControl"></a>

```csharp
public string CacheControl { get; set; }
```

- *Type:* string

Cache-Control directive to specify caching behavior of object data.

If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#cache_control GoogleStorageBatchOperationsJob#cache_control}

---

##### `ContentDisposition`<sup>Optional</sup> <a name="ContentDisposition" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; set; }
```

- *Type:* string

Content-Disposition of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#content_disposition GoogleStorageBatchOperationsJob#content_disposition}

---

##### `ContentEncoding`<sup>Optional</sup> <a name="ContentEncoding" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; set; }
```

- *Type:* string

Content Encoding of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#content_encoding GoogleStorageBatchOperationsJob#content_encoding}

---

##### `ContentLanguage`<sup>Optional</sup> <a name="ContentLanguage" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentLanguage"></a>

```csharp
public string ContentLanguage { get; set; }
```

- *Type:* string

Content-Language of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#content_language GoogleStorageBatchOperationsJob#content_language}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Content-Type of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#content_type GoogleStorageBatchOperationsJob#content_type}

---

##### `CustomMetadata`<sup>Optional</sup> <a name="CustomMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.customMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-provided metadata, in key/value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#custom_metadata GoogleStorageBatchOperationsJob#custom_metadata}

---

##### `CustomTime`<sup>Optional</sup> <a name="CustomTime" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.customTime"></a>

```csharp
public string CustomTime { get; set; }
```

- *Type:* string

Updates the objects fixed custom time metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#custom_time GoogleStorageBatchOperationsJob#custom_time}

---

### GoogleStorageBatchOperationsJobPutObjectHold <a name="GoogleStorageBatchOperationsJobPutObjectHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBatchOperationsJobPutObjectHold {
    string EventBasedHold = null,
    string TemporaryHold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold.property.eventBasedHold">EventBasedHold</a></code> | <code>string</code> | set/unset to update event based hold for objects. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold.property.temporaryHold">TemporaryHold</a></code> | <code>string</code> | set/unset to update temporary based hold for objects. |

---

##### `EventBasedHold`<sup>Optional</sup> <a name="EventBasedHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold.property.eventBasedHold"></a>

```csharp
public string EventBasedHold { get; set; }
```

- *Type:* string

set/unset to update event based hold for objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#event_based_hold GoogleStorageBatchOperationsJob#event_based_hold}

---

##### `TemporaryHold`<sup>Optional</sup> <a name="TemporaryHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold.property.temporaryHold"></a>

```csharp
public string TemporaryHold { get; set; }
```

- *Type:* string

set/unset to update temporary based hold for objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#temporary_hold GoogleStorageBatchOperationsJob#temporary_hold}

---

### GoogleStorageBatchOperationsJobRewriteObject <a name="GoogleStorageBatchOperationsJobRewriteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBatchOperationsJobRewriteObject {
    string KmsKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject.property.kmsKey">KmsKey</a></code> | <code>string</code> | valid kms key. |

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

valid kms key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#kms_key GoogleStorageBatchOperationsJob#kms_key}

---

### GoogleStorageBatchOperationsJobTimeouts <a name="GoogleStorageBatchOperationsJobTimeouts" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBatchOperationsJobTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#create GoogleStorageBatchOperationsJob#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#delete GoogleStorageBatchOperationsJob#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#update GoogleStorageBatchOperationsJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#create GoogleStorageBatchOperationsJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#delete GoogleStorageBatchOperationsJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_storage_batch_operations_job#update GoogleStorageBatchOperationsJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference <a name="GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.resetManifestLocation">ResetManifestLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetManifestLocation` <a name="ResetManifestLocation" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.resetManifestLocation"></a>

```csharp
private void ResetManifestLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocationInput">ManifestLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocation">ManifestLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest">GoogleStorageBatchOperationsJobBucketListBucketsManifest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManifestLocationInput`<sup>Optional</sup> <a name="ManifestLocationInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocationInput"></a>

```csharp
public string ManifestLocationInput { get; }
```

- *Type:* string

---

##### `ManifestLocation`<sup>Required</sup> <a name="ManifestLocation" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocation"></a>

```csharp
public string ManifestLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageBatchOperationsJobBucketListBucketsManifest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest">GoogleStorageBatchOperationsJobBucketListBucketsManifest</a>

---


### GoogleStorageBatchOperationsJobBucketListBucketsOutputReference <a name="GoogleStorageBatchOperationsJobBucketListBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBatchOperationsJobBucketListBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.putManifest">PutManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.putPrefixList">PutPrefixList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.resetManifest">ResetManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.resetPrefixList">ResetPrefixList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManifest` <a name="PutManifest" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.putManifest"></a>

```csharp
private void PutManifest(GoogleStorageBatchOperationsJobBucketListBucketsManifest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.putManifest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest">GoogleStorageBatchOperationsJobBucketListBucketsManifest</a>

---

##### `PutPrefixList` <a name="PutPrefixList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.putPrefixList"></a>

```csharp
private void PutPrefixList(GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.putPrefixList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

---

##### `ResetManifest` <a name="ResetManifest" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.resetManifest"></a>

```csharp
private void ResetManifest()
```

##### `ResetPrefixList` <a name="ResetPrefixList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.resetPrefixList"></a>

```csharp
private void ResetPrefixList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.manifest">Manifest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference">GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixList">PrefixList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.manifestInput">ManifestInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest">GoogleStorageBatchOperationsJobBucketListBucketsManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixListInput">PrefixListInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets">GoogleStorageBatchOperationsJobBucketListBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.manifest"></a>

```csharp
public GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference Manifest { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference">GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference</a>

---

##### `PrefixList`<sup>Required</sup> <a name="PrefixList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixList"></a>

```csharp
public GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference PrefixList { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `ManifestInput`<sup>Optional</sup> <a name="ManifestInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.manifestInput"></a>

```csharp
public GoogleStorageBatchOperationsJobBucketListBucketsManifest ManifestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest">GoogleStorageBatchOperationsJobBucketListBucketsManifest</a>

---

##### `PrefixListInput`<sup>Optional</sup> <a name="PrefixListInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixListInput"></a>

```csharp
public GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct PrefixListInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageBatchOperationsJobBucketListBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets">GoogleStorageBatchOperationsJobBucketListBuckets</a>

---


### GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference <a name="GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resetIncludedObjectPrefixes">ResetIncludedObjectPrefixes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludedObjectPrefixes` <a name="ResetIncludedObjectPrefixes" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resetIncludedObjectPrefixes"></a>

```csharp
private void ResetIncludedObjectPrefixes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixesInput">IncludedObjectPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixes">IncludedObjectPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludedObjectPrefixesInput`<sup>Optional</sup> <a name="IncludedObjectPrefixesInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixesInput"></a>

```csharp
public string[] IncludedObjectPrefixesInput { get; }
```

- *Type:* string[]

---

##### `IncludedObjectPrefixes`<sup>Required</sup> <a name="IncludedObjectPrefixes" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixes"></a>

```csharp
public string[] IncludedObjectPrefixes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

---


### GoogleStorageBatchOperationsJobBucketListStructOutputReference <a name="GoogleStorageBatchOperationsJobBucketListStructOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBatchOperationsJobBucketListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.putBuckets">PutBuckets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBuckets` <a name="PutBuckets" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.putBuckets"></a>

```csharp
private void PutBuckets(GoogleStorageBatchOperationsJobBucketListBuckets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.putBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets">GoogleStorageBatchOperationsJobBucketListBuckets</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.buckets">Buckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference">GoogleStorageBatchOperationsJobBucketListBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.bucketsInput">BucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets">GoogleStorageBatchOperationsJobBucketListBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct">GoogleStorageBatchOperationsJobBucketListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Buckets`<sup>Required</sup> <a name="Buckets" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.buckets"></a>

```csharp
public GoogleStorageBatchOperationsJobBucketListBucketsOutputReference Buckets { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference">GoogleStorageBatchOperationsJobBucketListBucketsOutputReference</a>

---

##### `BucketsInput`<sup>Optional</sup> <a name="BucketsInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.bucketsInput"></a>

```csharp
public GoogleStorageBatchOperationsJobBucketListBuckets BucketsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets">GoogleStorageBatchOperationsJobBucketListBuckets</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageBatchOperationsJobBucketListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct">GoogleStorageBatchOperationsJobBucketListStruct</a>

---


### GoogleStorageBatchOperationsJobDeleteObjectOutputReference <a name="GoogleStorageBatchOperationsJobDeleteObjectOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBatchOperationsJobDeleteObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabledInput">PermanentObjectDeletionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabled">PermanentObjectDeletionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject">GoogleStorageBatchOperationsJobDeleteObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PermanentObjectDeletionEnabledInput`<sup>Optional</sup> <a name="PermanentObjectDeletionEnabledInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabledInput"></a>

```csharp
public object PermanentObjectDeletionEnabledInput { get; }
```

- *Type:* object

---

##### `PermanentObjectDeletionEnabled`<sup>Required</sup> <a name="PermanentObjectDeletionEnabled" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabled"></a>

```csharp
public object PermanentObjectDeletionEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageBatchOperationsJobDeleteObject InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject">GoogleStorageBatchOperationsJobDeleteObject</a>

---


### GoogleStorageBatchOperationsJobPutMetadataOutputReference <a name="GoogleStorageBatchOperationsJobPutMetadataOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBatchOperationsJobPutMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetCacheControl">ResetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentDisposition">ResetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentEncoding">ResetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentLanguage">ResetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetCustomMetadata">ResetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetCustomTime">ResetCustomTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCacheControl` <a name="ResetCacheControl" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetCacheControl"></a>

```csharp
private void ResetCacheControl()
```

##### `ResetContentDisposition` <a name="ResetContentDisposition" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentDisposition"></a>

```csharp
private void ResetContentDisposition()
```

##### `ResetContentEncoding` <a name="ResetContentEncoding" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentEncoding"></a>

```csharp
private void ResetContentEncoding()
```

##### `ResetContentLanguage` <a name="ResetContentLanguage" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentLanguage"></a>

```csharp
private void ResetContentLanguage()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetCustomMetadata` <a name="ResetCustomMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetCustomMetadata"></a>

```csharp
private void ResetCustomMetadata()
```

##### `ResetCustomTime` <a name="ResetCustomTime" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetCustomTime"></a>

```csharp
private void ResetCustomTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.cacheControlInput">CacheControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentDispositionInput">ContentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentEncodingInput">ContentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguageInput">ContentLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customMetadataInput">CustomMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customTimeInput">CustomTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.cacheControl">CacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguage">ContentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customMetadata">CustomMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customTime">CustomTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata">GoogleStorageBatchOperationsJobPutMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CacheControlInput`<sup>Optional</sup> <a name="CacheControlInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.cacheControlInput"></a>

```csharp
public string CacheControlInput { get; }
```

- *Type:* string

---

##### `ContentDispositionInput`<sup>Optional</sup> <a name="ContentDispositionInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentDispositionInput"></a>

```csharp
public string ContentDispositionInput { get; }
```

- *Type:* string

---

##### `ContentEncodingInput`<sup>Optional</sup> <a name="ContentEncodingInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentEncodingInput"></a>

```csharp
public string ContentEncodingInput { get; }
```

- *Type:* string

---

##### `ContentLanguageInput`<sup>Optional</sup> <a name="ContentLanguageInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguageInput"></a>

```csharp
public string ContentLanguageInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `CustomMetadataInput`<sup>Optional</sup> <a name="CustomMetadataInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CustomTimeInput`<sup>Optional</sup> <a name="CustomTimeInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customTimeInput"></a>

```csharp
public string CustomTimeInput { get; }
```

- *Type:* string

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.cacheControl"></a>

```csharp
public string CacheControl { get; }
```

- *Type:* string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; }
```

- *Type:* string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; }
```

- *Type:* string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguage"></a>

```csharp
public string ContentLanguage { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `CustomMetadata`<sup>Required</sup> <a name="CustomMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CustomTime`<sup>Required</sup> <a name="CustomTime" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customTime"></a>

```csharp
public string CustomTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageBatchOperationsJobPutMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata">GoogleStorageBatchOperationsJobPutMetadata</a>

---


### GoogleStorageBatchOperationsJobPutObjectHoldOutputReference <a name="GoogleStorageBatchOperationsJobPutObjectHoldOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBatchOperationsJobPutObjectHoldOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.resetEventBasedHold">ResetEventBasedHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.resetTemporaryHold">ResetTemporaryHold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventBasedHold` <a name="ResetEventBasedHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.resetEventBasedHold"></a>

```csharp
private void ResetEventBasedHold()
```

##### `ResetTemporaryHold` <a name="ResetTemporaryHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.resetTemporaryHold"></a>

```csharp
private void ResetTemporaryHold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHoldInput">EventBasedHoldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHoldInput">TemporaryHoldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHold">EventBasedHold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHold">TemporaryHold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold">GoogleStorageBatchOperationsJobPutObjectHold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventBasedHoldInput`<sup>Optional</sup> <a name="EventBasedHoldInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHoldInput"></a>

```csharp
public string EventBasedHoldInput { get; }
```

- *Type:* string

---

##### `TemporaryHoldInput`<sup>Optional</sup> <a name="TemporaryHoldInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHoldInput"></a>

```csharp
public string TemporaryHoldInput { get; }
```

- *Type:* string

---

##### `EventBasedHold`<sup>Required</sup> <a name="EventBasedHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHold"></a>

```csharp
public string EventBasedHold { get; }
```

- *Type:* string

---

##### `TemporaryHold`<sup>Required</sup> <a name="TemporaryHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHold"></a>

```csharp
public string TemporaryHold { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageBatchOperationsJobPutObjectHold InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold">GoogleStorageBatchOperationsJobPutObjectHold</a>

---


### GoogleStorageBatchOperationsJobRewriteObjectOutputReference <a name="GoogleStorageBatchOperationsJobRewriteObjectOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBatchOperationsJobRewriteObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject">GoogleStorageBatchOperationsJobRewriteObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageBatchOperationsJobRewriteObject InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject">GoogleStorageBatchOperationsJobRewriteObject</a>

---


### GoogleStorageBatchOperationsJobTimeoutsOutputReference <a name="GoogleStorageBatchOperationsJobTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBatchOperationsJobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



