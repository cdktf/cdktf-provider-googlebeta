# `googleStorageBucket` Submodule <a name="`googleStorageBucket` Submodule" id="@cdktf/provider-google-beta.googleStorageBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageBucket <a name="GoogleStorageBucket" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket google_storage_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucket(Construct Scope, string Id, GoogleStorageBucketConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig">GoogleStorageBucketConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig">GoogleStorageBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putAutoclass">PutAutoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putCors">PutCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putCustomPlacementConfig">PutCustomPlacementConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putHierarchicalNamespace">PutHierarchicalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putLifecycleRule">PutLifecycleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putRetentionPolicy">PutRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putSoftDeletePolicy">PutSoftDeletePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putVersioning">PutVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putWebsite">PutWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetAutoclass">ResetAutoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetCors">ResetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetCustomPlacementConfig">ResetCustomPlacementConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetDefaultEventBasedHold">ResetDefaultEventBasedHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetEnableObjectRetention">ResetEnableObjectRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetHierarchicalNamespace">ResetHierarchicalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetLifecycleRule">ResetLifecycleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetPublicAccessPrevention">ResetPublicAccessPrevention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetRequesterPays">ResetRequesterPays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetRetentionPolicy">ResetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetRpo">ResetRpo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetSoftDeletePolicy">ResetSoftDeletePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetStorageClass">ResetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetUniformBucketLevelAccess">ResetUniformBucketLevelAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetVersioning">ResetVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetWebsite">ResetWebsite</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoclass` <a name="PutAutoclass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putAutoclass"></a>

```csharp
private void PutAutoclass(GoogleStorageBucketAutoclass Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putAutoclass.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a>

---

##### `PutCors` <a name="PutCors" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putCors"></a>

```csharp
private void PutCors(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putCors.parameter.value"></a>

- *Type:* object

---

##### `PutCustomPlacementConfig` <a name="PutCustomPlacementConfig" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putCustomPlacementConfig"></a>

```csharp
private void PutCustomPlacementConfig(GoogleStorageBucketCustomPlacementConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putCustomPlacementConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a>

---

##### `PutEncryption` <a name="PutEncryption" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putEncryption"></a>

```csharp
private void PutEncryption(GoogleStorageBucketEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a>

---

##### `PutHierarchicalNamespace` <a name="PutHierarchicalNamespace" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putHierarchicalNamespace"></a>

```csharp
private void PutHierarchicalNamespace(GoogleStorageBucketHierarchicalNamespace Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putHierarchicalNamespace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a>

---

##### `PutLifecycleRule` <a name="PutLifecycleRule" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putLifecycleRule"></a>

```csharp
private void PutLifecycleRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putLifecycleRule.parameter.value"></a>

- *Type:* object

---

##### `PutLogging` <a name="PutLogging" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putLogging"></a>

```csharp
private void PutLogging(GoogleStorageBucketLogging Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a>

---

##### `PutRetentionPolicy` <a name="PutRetentionPolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putRetentionPolicy"></a>

```csharp
private void PutRetentionPolicy(GoogleStorageBucketRetentionPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a>

---

##### `PutSoftDeletePolicy` <a name="PutSoftDeletePolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putSoftDeletePolicy"></a>

```csharp
private void PutSoftDeletePolicy(GoogleStorageBucketSoftDeletePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putSoftDeletePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleStorageBucketTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts">GoogleStorageBucketTimeouts</a>

---

##### `PutVersioning` <a name="PutVersioning" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putVersioning"></a>

```csharp
private void PutVersioning(GoogleStorageBucketVersioning Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putVersioning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a>

---

##### `PutWebsite` <a name="PutWebsite" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putWebsite"></a>

```csharp
private void PutWebsite(GoogleStorageBucketWebsite Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.putWebsite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a>

---

##### `ResetAutoclass` <a name="ResetAutoclass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetAutoclass"></a>

```csharp
private void ResetAutoclass()
```

##### `ResetCors` <a name="ResetCors" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetCors"></a>

```csharp
private void ResetCors()
```

##### `ResetCustomPlacementConfig` <a name="ResetCustomPlacementConfig" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetCustomPlacementConfig"></a>

```csharp
private void ResetCustomPlacementConfig()
```

##### `ResetDefaultEventBasedHold` <a name="ResetDefaultEventBasedHold" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetDefaultEventBasedHold"></a>

```csharp
private void ResetDefaultEventBasedHold()
```

##### `ResetEnableObjectRetention` <a name="ResetEnableObjectRetention" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetEnableObjectRetention"></a>

```csharp
private void ResetEnableObjectRetention()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetEncryption"></a>

```csharp
private void ResetEncryption()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetHierarchicalNamespace` <a name="ResetHierarchicalNamespace" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetHierarchicalNamespace"></a>

```csharp
private void ResetHierarchicalNamespace()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLifecycleRule` <a name="ResetLifecycleRule" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetLifecycleRule"></a>

```csharp
private void ResetLifecycleRule()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetLogging"></a>

```csharp
private void ResetLogging()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPublicAccessPrevention` <a name="ResetPublicAccessPrevention" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetPublicAccessPrevention"></a>

```csharp
private void ResetPublicAccessPrevention()
```

##### `ResetRequesterPays` <a name="ResetRequesterPays" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetRequesterPays"></a>

```csharp
private void ResetRequesterPays()
```

##### `ResetRetentionPolicy` <a name="ResetRetentionPolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetRetentionPolicy"></a>

```csharp
private void ResetRetentionPolicy()
```

##### `ResetRpo` <a name="ResetRpo" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetRpo"></a>

```csharp
private void ResetRpo()
```

##### `ResetSoftDeletePolicy` <a name="ResetSoftDeletePolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetSoftDeletePolicy"></a>

```csharp
private void ResetSoftDeletePolicy()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetStorageClass"></a>

```csharp
private void ResetStorageClass()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUniformBucketLevelAccess` <a name="ResetUniformBucketLevelAccess" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetUniformBucketLevelAccess"></a>

```csharp
private void ResetUniformBucketLevelAccess()
```

##### `ResetVersioning` <a name="ResetVersioning" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetVersioning"></a>

```csharp
private void ResetVersioning()
```

##### `ResetWebsite` <a name="ResetWebsite" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.resetWebsite"></a>

```csharp
private void ResetWebsite()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleStorageBucket resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageBucket.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageBucket.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageBucket.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageBucket.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleStorageBucket resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleStorageBucket to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleStorageBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.autoclass">Autoclass</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference">GoogleStorageBucketAutoclassOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList">GoogleStorageBucketCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.customPlacementConfig">CustomPlacementConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference">GoogleStorageBucketCustomPlacementConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.encryption">Encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference">GoogleStorageBucketEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.hierarchicalNamespace">HierarchicalNamespace</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference">GoogleStorageBucketHierarchicalNamespaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.lifecycleRule">LifecycleRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList">GoogleStorageBucketLifecycleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference">GoogleStorageBucketLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.projectNumber">ProjectNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference">GoogleStorageBucketRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.softDeletePolicy">SoftDeletePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference">GoogleStorageBucketSoftDeletePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference">GoogleStorageBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.versioning">Versioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference">GoogleStorageBucketVersioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.website">Website</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference">GoogleStorageBucketWebsiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.autoclassInput">AutoclassInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.corsInput">CorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.customPlacementConfigInput">CustomPlacementConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.defaultEventBasedHoldInput">DefaultEventBasedHoldInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.enableObjectRetentionInput">EnableObjectRetentionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.encryptionInput">EncryptionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.hierarchicalNamespaceInput">HierarchicalNamespaceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.lifecycleRuleInput">LifecycleRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.loggingInput">LoggingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.publicAccessPreventionInput">PublicAccessPreventionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.requesterPaysInput">RequesterPaysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.rpoInput">RpoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.softDeletePolicyInput">SoftDeletePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.uniformBucketLevelAccessInput">UniformBucketLevelAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.versioningInput">VersioningInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.websiteInput">WebsiteInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.defaultEventBasedHold">DefaultEventBasedHold</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.enableObjectRetention">EnableObjectRetention</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.publicAccessPrevention">PublicAccessPrevention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.requesterPays">RequesterPays</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.rpo">Rpo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.uniformBucketLevelAccess">UniformBucketLevelAccess</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Autoclass`<sup>Required</sup> <a name="Autoclass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.autoclass"></a>

```csharp
public GoogleStorageBucketAutoclassOutputReference Autoclass { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference">GoogleStorageBucketAutoclassOutputReference</a>

---

##### `Cors`<sup>Required</sup> <a name="Cors" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.cors"></a>

```csharp
public GoogleStorageBucketCorsList Cors { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList">GoogleStorageBucketCorsList</a>

---

##### `CustomPlacementConfig`<sup>Required</sup> <a name="CustomPlacementConfig" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.customPlacementConfig"></a>

```csharp
public GoogleStorageBucketCustomPlacementConfigOutputReference CustomPlacementConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference">GoogleStorageBucketCustomPlacementConfigOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.encryption"></a>

```csharp
public GoogleStorageBucketEncryptionOutputReference Encryption { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference">GoogleStorageBucketEncryptionOutputReference</a>

---

##### `HierarchicalNamespace`<sup>Required</sup> <a name="HierarchicalNamespace" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.hierarchicalNamespace"></a>

```csharp
public GoogleStorageBucketHierarchicalNamespaceOutputReference HierarchicalNamespace { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference">GoogleStorageBucketHierarchicalNamespaceOutputReference</a>

---

##### `LifecycleRule`<sup>Required</sup> <a name="LifecycleRule" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.lifecycleRule"></a>

```csharp
public GoogleStorageBucketLifecycleRuleList LifecycleRule { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList">GoogleStorageBucketLifecycleRuleList</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.logging"></a>

```csharp
public GoogleStorageBucketLoggingOutputReference Logging { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference">GoogleStorageBucketLoggingOutputReference</a>

---

##### `ProjectNumber`<sup>Required</sup> <a name="ProjectNumber" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.projectNumber"></a>

```csharp
public double ProjectNumber { get; }
```

- *Type:* double

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.retentionPolicy"></a>

```csharp
public GoogleStorageBucketRetentionPolicyOutputReference RetentionPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference">GoogleStorageBucketRetentionPolicyOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `SoftDeletePolicy`<sup>Required</sup> <a name="SoftDeletePolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.softDeletePolicy"></a>

```csharp
public GoogleStorageBucketSoftDeletePolicyOutputReference SoftDeletePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference">GoogleStorageBucketSoftDeletePolicyOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.timeouts"></a>

```csharp
public GoogleStorageBucketTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference">GoogleStorageBucketTimeoutsOutputReference</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Versioning`<sup>Required</sup> <a name="Versioning" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.versioning"></a>

```csharp
public GoogleStorageBucketVersioningOutputReference Versioning { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference">GoogleStorageBucketVersioningOutputReference</a>

---

##### `Website`<sup>Required</sup> <a name="Website" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.website"></a>

```csharp
public GoogleStorageBucketWebsiteOutputReference Website { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference">GoogleStorageBucketWebsiteOutputReference</a>

---

##### `AutoclassInput`<sup>Optional</sup> <a name="AutoclassInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.autoclassInput"></a>

```csharp
public GoogleStorageBucketAutoclass AutoclassInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a>

---

##### `CorsInput`<sup>Optional</sup> <a name="CorsInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.corsInput"></a>

```csharp
public object CorsInput { get; }
```

- *Type:* object

---

##### `CustomPlacementConfigInput`<sup>Optional</sup> <a name="CustomPlacementConfigInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.customPlacementConfigInput"></a>

```csharp
public GoogleStorageBucketCustomPlacementConfig CustomPlacementConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a>

---

##### `DefaultEventBasedHoldInput`<sup>Optional</sup> <a name="DefaultEventBasedHoldInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.defaultEventBasedHoldInput"></a>

```csharp
public object DefaultEventBasedHoldInput { get; }
```

- *Type:* object

---

##### `EnableObjectRetentionInput`<sup>Optional</sup> <a name="EnableObjectRetentionInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.enableObjectRetentionInput"></a>

```csharp
public object EnableObjectRetentionInput { get; }
```

- *Type:* object

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.encryptionInput"></a>

```csharp
public GoogleStorageBucketEncryption EncryptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a>

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.forceDestroyInput"></a>

```csharp
public object ForceDestroyInput { get; }
```

- *Type:* object

---

##### `HierarchicalNamespaceInput`<sup>Optional</sup> <a name="HierarchicalNamespaceInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.hierarchicalNamespaceInput"></a>

```csharp
public GoogleStorageBucketHierarchicalNamespace HierarchicalNamespaceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LifecycleRuleInput`<sup>Optional</sup> <a name="LifecycleRuleInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.lifecycleRuleInput"></a>

```csharp
public object LifecycleRuleInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.loggingInput"></a>

```csharp
public GoogleStorageBucketLogging LoggingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PublicAccessPreventionInput`<sup>Optional</sup> <a name="PublicAccessPreventionInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.publicAccessPreventionInput"></a>

```csharp
public string PublicAccessPreventionInput { get; }
```

- *Type:* string

---

##### `RequesterPaysInput`<sup>Optional</sup> <a name="RequesterPaysInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.requesterPaysInput"></a>

```csharp
public object RequesterPaysInput { get; }
```

- *Type:* object

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.retentionPolicyInput"></a>

```csharp
public GoogleStorageBucketRetentionPolicy RetentionPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a>

---

##### `RpoInput`<sup>Optional</sup> <a name="RpoInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.rpoInput"></a>

```csharp
public string RpoInput { get; }
```

- *Type:* string

---

##### `SoftDeletePolicyInput`<sup>Optional</sup> <a name="SoftDeletePolicyInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.softDeletePolicyInput"></a>

```csharp
public GoogleStorageBucketSoftDeletePolicy SoftDeletePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a>

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UniformBucketLevelAccessInput`<sup>Optional</sup> <a name="UniformBucketLevelAccessInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.uniformBucketLevelAccessInput"></a>

```csharp
public object UniformBucketLevelAccessInput { get; }
```

- *Type:* object

---

##### `VersioningInput`<sup>Optional</sup> <a name="VersioningInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.versioningInput"></a>

```csharp
public GoogleStorageBucketVersioning VersioningInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a>

---

##### `WebsiteInput`<sup>Optional</sup> <a name="WebsiteInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.websiteInput"></a>

```csharp
public GoogleStorageBucketWebsite WebsiteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a>

---

##### `DefaultEventBasedHold`<sup>Required</sup> <a name="DefaultEventBasedHold" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.defaultEventBasedHold"></a>

```csharp
public object DefaultEventBasedHold { get; }
```

- *Type:* object

---

##### `EnableObjectRetention`<sup>Required</sup> <a name="EnableObjectRetention" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.enableObjectRetention"></a>

```csharp
public object EnableObjectRetention { get; }
```

- *Type:* object

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PublicAccessPrevention`<sup>Required</sup> <a name="PublicAccessPrevention" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.publicAccessPrevention"></a>

```csharp
public string PublicAccessPrevention { get; }
```

- *Type:* string

---

##### `RequesterPays`<sup>Required</sup> <a name="RequesterPays" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.requesterPays"></a>

```csharp
public object RequesterPays { get; }
```

- *Type:* object

---

##### `Rpo`<sup>Required</sup> <a name="Rpo" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.rpo"></a>

```csharp
public string Rpo { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `UniformBucketLevelAccess`<sup>Required</sup> <a name="UniformBucketLevelAccess" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.uniformBucketLevelAccess"></a>

```csharp
public object UniformBucketLevelAccess { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucket.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageBucketAutoclass <a name="GoogleStorageBucketAutoclass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketAutoclass {
    object Enabled,
    string TerminalStorageClass = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass.property.enabled">Enabled</a></code> | <code>object</code> | While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass.property.terminalStorageClass">TerminalStorageClass</a></code> | <code>string</code> | The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

While set to true, autoclass automatically transitions objects in your bucket to appropriate storage classes based on each object's access pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#enabled GoogleStorageBucket#enabled}

---

##### `TerminalStorageClass`<sup>Optional</sup> <a name="TerminalStorageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass.property.terminalStorageClass"></a>

```csharp
public string TerminalStorageClass { get; set; }
```

- *Type:* string

The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time.

Supported values include: NEARLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#terminal_storage_class GoogleStorageBucket#terminal_storage_class}

---

### GoogleStorageBucketConfig <a name="GoogleStorageBucketConfig" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    GoogleStorageBucketAutoclass Autoclass = null,
    object Cors = null,
    GoogleStorageBucketCustomPlacementConfig CustomPlacementConfig = null,
    object DefaultEventBasedHold = null,
    object EnableObjectRetention = null,
    GoogleStorageBucketEncryption Encryption = null,
    object ForceDestroy = null,
    GoogleStorageBucketHierarchicalNamespace HierarchicalNamespace = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    object LifecycleRule = null,
    GoogleStorageBucketLogging Logging = null,
    string Project = null,
    string PublicAccessPrevention = null,
    object RequesterPays = null,
    GoogleStorageBucketRetentionPolicy RetentionPolicy = null,
    string Rpo = null,
    GoogleStorageBucketSoftDeletePolicy SoftDeletePolicy = null,
    string StorageClass = null,
    GoogleStorageBucketTimeouts Timeouts = null,
    object UniformBucketLevelAccess = null,
    GoogleStorageBucketVersioning Versioning = null,
    GoogleStorageBucketWebsite Website = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.location">Location</a></code> | <code>string</code> | The Google Cloud Storage location. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.name">Name</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.autoclass">Autoclass</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a></code> | autoclass block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.cors">Cors</a></code> | <code>object</code> | cors block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.customPlacementConfig">CustomPlacementConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a></code> | custom_placement_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.defaultEventBasedHold">DefaultEventBasedHold</a></code> | <code>object</code> | Whether or not to automatically apply an eventBasedHold to new objects added to the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.enableObjectRetention">EnableObjectRetention</a></code> | <code>object</code> | Enables each object in the bucket to have its own retention policy, which prevents deletion until stored for a specific length of time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.encryption">Encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | When deleting a bucket, this boolean option will delete all contained objects. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.hierarchicalNamespace">HierarchicalNamespace</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a></code> | hierarchical_namespace block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#id GoogleStorageBucket#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A set of key/value label pairs to assign to the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.lifecycleRule">LifecycleRule</a></code> | <code>object</code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.publicAccessPrevention">PublicAccessPrevention</a></code> | <code>string</code> | Prevents public access to a bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.requesterPays">RequesterPays</a></code> | <code>object</code> | Enables Requester Pays on a storage bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.rpo">Rpo</a></code> | <code>string</code> | Specifies the RPO setting of bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.softDeletePolicy">SoftDeletePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a></code> | soft_delete_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.storageClass">StorageClass</a></code> | <code>string</code> | The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts">GoogleStorageBucketTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.uniformBucketLevelAccess">UniformBucketLevelAccess</a></code> | <code>object</code> | Enables uniform bucket-level access on a bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.versioning">Versioning</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a></code> | versioning block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.website">Website</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a></code> | website block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The Google Cloud Storage location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#location GoogleStorageBucket#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#name GoogleStorageBucket#name}

---

##### `Autoclass`<sup>Optional</sup> <a name="Autoclass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.autoclass"></a>

```csharp
public GoogleStorageBucketAutoclass Autoclass { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a>

autoclass block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#autoclass GoogleStorageBucket#autoclass}

---

##### `Cors`<sup>Optional</sup> <a name="Cors" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.cors"></a>

```csharp
public object Cors { get; set; }
```

- *Type:* object

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#cors GoogleStorageBucket#cors}

---

##### `CustomPlacementConfig`<sup>Optional</sup> <a name="CustomPlacementConfig" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.customPlacementConfig"></a>

```csharp
public GoogleStorageBucketCustomPlacementConfig CustomPlacementConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a>

custom_placement_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#custom_placement_config GoogleStorageBucket#custom_placement_config}

---

##### `DefaultEventBasedHold`<sup>Optional</sup> <a name="DefaultEventBasedHold" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.defaultEventBasedHold"></a>

```csharp
public object DefaultEventBasedHold { get; set; }
```

- *Type:* object

Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#default_event_based_hold GoogleStorageBucket#default_event_based_hold}

---

##### `EnableObjectRetention`<sup>Optional</sup> <a name="EnableObjectRetention" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.enableObjectRetention"></a>

```csharp
public object EnableObjectRetention { get; set; }
```

- *Type:* object

Enables each object in the bucket to have its own retention policy, which prevents deletion until stored for a specific length of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#enable_object_retention GoogleStorageBucket#enable_object_retention}

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.encryption"></a>

```csharp
public GoogleStorageBucketEncryption Encryption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#encryption GoogleStorageBucket#encryption}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; set; }
```

- *Type:* object

When deleting a bucket, this boolean option will delete all contained objects.

If you try to delete a bucket that contains objects, Terraform will fail that run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#force_destroy GoogleStorageBucket#force_destroy}

---

##### `HierarchicalNamespace`<sup>Optional</sup> <a name="HierarchicalNamespace" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.hierarchicalNamespace"></a>

```csharp
public GoogleStorageBucketHierarchicalNamespace HierarchicalNamespace { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a>

hierarchical_namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#hierarchical_namespace GoogleStorageBucket#hierarchical_namespace}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#id GoogleStorageBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A set of key/value label pairs to assign to the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#labels GoogleStorageBucket#labels}

---

##### `LifecycleRule`<sup>Optional</sup> <a name="LifecycleRule" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.lifecycleRule"></a>

```csharp
public object LifecycleRule { get; set; }
```

- *Type:* object

lifecycle_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#lifecycle_rule GoogleStorageBucket#lifecycle_rule}

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.logging"></a>

```csharp
public GoogleStorageBucketLogging Logging { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#logging GoogleStorageBucket#logging}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#project GoogleStorageBucket#project}

---

##### `PublicAccessPrevention`<sup>Optional</sup> <a name="PublicAccessPrevention" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.publicAccessPrevention"></a>

```csharp
public string PublicAccessPrevention { get; set; }
```

- *Type:* string

Prevents public access to a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#public_access_prevention GoogleStorageBucket#public_access_prevention}

---

##### `RequesterPays`<sup>Optional</sup> <a name="RequesterPays" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.requesterPays"></a>

```csharp
public object RequesterPays { get; set; }
```

- *Type:* object

Enables Requester Pays on a storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#requester_pays GoogleStorageBucket#requester_pays}

---

##### `RetentionPolicy`<sup>Optional</sup> <a name="RetentionPolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.retentionPolicy"></a>

```csharp
public GoogleStorageBucketRetentionPolicy RetentionPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#retention_policy GoogleStorageBucket#retention_policy}

---

##### `Rpo`<sup>Optional</sup> <a name="Rpo" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.rpo"></a>

```csharp
public string Rpo { get; set; }
```

- *Type:* string

Specifies the RPO setting of bucket.

If set 'ASYNC_TURBO', The Turbo Replication will be enabled for the dual-region bucket. Value 'DEFAULT' will set RPO setting to default. Turbo Replication is only for buckets in dual-regions.See the docs for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#rpo GoogleStorageBucket#rpo}

---

##### `SoftDeletePolicy`<sup>Optional</sup> <a name="SoftDeletePolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.softDeletePolicy"></a>

```csharp
public GoogleStorageBucketSoftDeletePolicy SoftDeletePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a>

soft_delete_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#soft_delete_policy GoogleStorageBucket#soft_delete_policy}

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#storage_class GoogleStorageBucket#storage_class}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.timeouts"></a>

```csharp
public GoogleStorageBucketTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts">GoogleStorageBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#timeouts GoogleStorageBucket#timeouts}

---

##### `UniformBucketLevelAccess`<sup>Optional</sup> <a name="UniformBucketLevelAccess" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.uniformBucketLevelAccess"></a>

```csharp
public object UniformBucketLevelAccess { get; set; }
```

- *Type:* object

Enables uniform bucket-level access on a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#uniform_bucket_level_access GoogleStorageBucket#uniform_bucket_level_access}

---

##### `Versioning`<sup>Optional</sup> <a name="Versioning" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.versioning"></a>

```csharp
public GoogleStorageBucketVersioning Versioning { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a>

versioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#versioning GoogleStorageBucket#versioning}

---

##### `Website`<sup>Optional</sup> <a name="Website" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketConfig.property.website"></a>

```csharp
public GoogleStorageBucketWebsite Website { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#website GoogleStorageBucket#website}

---

### GoogleStorageBucketCors <a name="GoogleStorageBucketCors" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketCors {
    double MaxAgeSeconds = null,
    string[] Method = null,
    string[] Origin = null,
    string[] ResponseHeader = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.maxAgeSeconds">MaxAgeSeconds</a></code> | <code>double</code> | The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.method">Method</a></code> | <code>string[]</code> | The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.origin">Origin</a></code> | <code>string[]</code> | The list of Origins eligible to receive CORS response headers. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.responseHeader">ResponseHeader</a></code> | <code>string[]</code> | The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains. |

---

##### `MaxAgeSeconds`<sup>Optional</sup> <a name="MaxAgeSeconds" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.maxAgeSeconds"></a>

```csharp
public double MaxAgeSeconds { get; set; }
```

- *Type:* double

The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#max_age_seconds GoogleStorageBucket#max_age_seconds}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.method"></a>

```csharp
public string[] Method { get; set; }
```

- *Type:* string[]

The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#method GoogleStorageBucket#method}

---

##### `Origin`<sup>Optional</sup> <a name="Origin" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.origin"></a>

```csharp
public string[] Origin { get; set; }
```

- *Type:* string[]

The list of Origins eligible to receive CORS response headers.

Note: "*" is permitted in the list of origins, and means "any Origin".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#origin GoogleStorageBucket#origin}

---

##### `ResponseHeader`<sup>Optional</sup> <a name="ResponseHeader" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCors.property.responseHeader"></a>

```csharp
public string[] ResponseHeader { get; set; }
```

- *Type:* string[]

The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#response_header GoogleStorageBucket#response_header}

---

### GoogleStorageBucketCustomPlacementConfig <a name="GoogleStorageBucketCustomPlacementConfig" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketCustomPlacementConfig {
    string[] DataLocations
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig.property.dataLocations">DataLocations</a></code> | <code>string[]</code> | The list of individual regions that comprise a dual-region bucket. |

---

##### `DataLocations`<sup>Required</sup> <a name="DataLocations" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig.property.dataLocations"></a>

```csharp
public string[] DataLocations { get; set; }
```

- *Type:* string[]

The list of individual regions that comprise a dual-region bucket.

See the docs for a list of acceptable regions. Note: If any of the data_locations changes, it will recreate the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#data_locations GoogleStorageBucket#data_locations}

---

### GoogleStorageBucketEncryption <a name="GoogleStorageBucketEncryption" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketEncryption {
    string DefaultKmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption.property.defaultKmsKeyName">DefaultKmsKeyName</a></code> | <code>string</code> | A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified. |

---

##### `DefaultKmsKeyName`<sup>Required</sup> <a name="DefaultKmsKeyName" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption.property.defaultKmsKeyName"></a>

```csharp
public string DefaultKmsKeyName { get; set; }
```

- *Type:* string

A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified.

You must pay attention to whether the crypto key is available in the location that this bucket is created in. See the docs for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#default_kms_key_name GoogleStorageBucket#default_kms_key_name}

---

### GoogleStorageBucketHierarchicalNamespace <a name="GoogleStorageBucketHierarchicalNamespace" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketHierarchicalNamespace {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace.property.enabled">Enabled</a></code> | <code>object</code> | Set this field true to organize bucket with logical file system structure. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Set this field true to organize bucket with logical file system structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#enabled GoogleStorageBucket#enabled}

---

### GoogleStorageBucketLifecycleRule <a name="GoogleStorageBucketLifecycleRule" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketLifecycleRule {
    GoogleStorageBucketLifecycleRuleAction Action,
    GoogleStorageBucketLifecycleRuleCondition Condition
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule.property.action">Action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction">GoogleStorageBucketLifecycleRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition">GoogleStorageBucketLifecycleRuleCondition</a></code> | condition block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule.property.action"></a>

```csharp
public GoogleStorageBucketLifecycleRuleAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction">GoogleStorageBucketLifecycleRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#action GoogleStorageBucket#action}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRule.property.condition"></a>

```csharp
public GoogleStorageBucketLifecycleRuleCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition">GoogleStorageBucketLifecycleRuleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#condition GoogleStorageBucket#condition}

---

### GoogleStorageBucketLifecycleRuleAction <a name="GoogleStorageBucketLifecycleRuleAction" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketLifecycleRuleAction {
    string Type,
    string StorageClass = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction.property.type">Type</a></code> | <code>string</code> | The type of the action of this Lifecycle Rule. Supported values include: Delete, SetStorageClass and AbortIncompleteMultipartUpload. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction.property.storageClass">StorageClass</a></code> | <code>string</code> | The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the action of this Lifecycle Rule. Supported values include: Delete, SetStorageClass and AbortIncompleteMultipartUpload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#type GoogleStorageBucket#type}

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#storage_class GoogleStorageBucket#storage_class}

---

### GoogleStorageBucketLifecycleRuleCondition <a name="GoogleStorageBucketLifecycleRuleCondition" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketLifecycleRuleCondition {
    double Age = null,
    string CreatedBefore = null,
    string CustomTimeBefore = null,
    double DaysSinceCustomTime = null,
    double DaysSinceNoncurrentTime = null,
    string[] MatchesPrefix = null,
    string[] MatchesStorageClass = null,
    string[] MatchesSuffix = null,
    string NoncurrentTimeBefore = null,
    double NumNewerVersions = null,
    object SendAgeIfZero = null,
    object SendDaysSinceCustomTimeIfZero = null,
    object SendDaysSinceNoncurrentTimeIfZero = null,
    object SendNumNewerVersionsIfZero = null,
    string WithState = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.age">Age</a></code> | <code>double</code> | Minimum age of an object in days to satisfy this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.createdBefore">CreatedBefore</a></code> | <code>string</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.customTimeBefore">CustomTimeBefore</a></code> | <code>string</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.daysSinceCustomTime">DaysSinceCustomTime</a></code> | <code>double</code> | Number of days elapsed since the user-specified timestamp set on an object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.daysSinceNoncurrentTime">DaysSinceNoncurrentTime</a></code> | <code>double</code> | Number of days elapsed since the noncurrent timestamp of an object. This 										condition is relevant only for versioned objects. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.matchesPrefix">MatchesPrefix</a></code> | <code>string[]</code> | One or more matching name prefixes to satisfy this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.matchesStorageClass">MatchesStorageClass</a></code> | <code>string[]</code> | Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.matchesSuffix">MatchesSuffix</a></code> | <code>string[]</code> | One or more matching name suffixes to satisfy this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.noncurrentTimeBefore">NoncurrentTimeBefore</a></code> | <code>string</code> | Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.numNewerVersions">NumNewerVersions</a></code> | <code>double</code> | Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendAgeIfZero">SendAgeIfZero</a></code> | <code>object</code> | While set true, age value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendDaysSinceCustomTimeIfZero">SendDaysSinceCustomTimeIfZero</a></code> | <code>object</code> | While set true, days_since_custom_time value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendDaysSinceNoncurrentTimeIfZero">SendDaysSinceNoncurrentTimeIfZero</a></code> | <code>object</code> | While set true, days_since_noncurrent_time value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendNumNewerVersionsIfZero">SendNumNewerVersionsIfZero</a></code> | <code>object</code> | While set true, num_newer_versions value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.withState">WithState</a></code> | <code>string</code> | Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY". |

---

##### `Age`<sup>Optional</sup> <a name="Age" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.age"></a>

```csharp
public double Age { get; set; }
```

- *Type:* double

Minimum age of an object in days to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#age GoogleStorageBucket#age}

---

##### `CreatedBefore`<sup>Optional</sup> <a name="CreatedBefore" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.createdBefore"></a>

```csharp
public string CreatedBefore { get; set; }
```

- *Type:* string

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#created_before GoogleStorageBucket#created_before}

---

##### `CustomTimeBefore`<sup>Optional</sup> <a name="CustomTimeBefore" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.customTimeBefore"></a>

```csharp
public string CustomTimeBefore { get; set; }
```

- *Type:* string

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#custom_time_before GoogleStorageBucket#custom_time_before}

---

##### `DaysSinceCustomTime`<sup>Optional</sup> <a name="DaysSinceCustomTime" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.daysSinceCustomTime"></a>

```csharp
public double DaysSinceCustomTime { get; set; }
```

- *Type:* double

Number of days elapsed since the user-specified timestamp set on an object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#days_since_custom_time GoogleStorageBucket#days_since_custom_time}

---

##### `DaysSinceNoncurrentTime`<sup>Optional</sup> <a name="DaysSinceNoncurrentTime" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.daysSinceNoncurrentTime"></a>

```csharp
public double DaysSinceNoncurrentTime { get; set; }
```

- *Type:* double

Number of days elapsed since the noncurrent timestamp of an object. This 										condition is relevant only for versioned objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#days_since_noncurrent_time GoogleStorageBucket#days_since_noncurrent_time}

---

##### `MatchesPrefix`<sup>Optional</sup> <a name="MatchesPrefix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.matchesPrefix"></a>

```csharp
public string[] MatchesPrefix { get; set; }
```

- *Type:* string[]

One or more matching name prefixes to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#matches_prefix GoogleStorageBucket#matches_prefix}

---

##### `MatchesStorageClass`<sup>Optional</sup> <a name="MatchesStorageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.matchesStorageClass"></a>

```csharp
public string[] MatchesStorageClass { get; set; }
```

- *Type:* string[]

Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#matches_storage_class GoogleStorageBucket#matches_storage_class}

---

##### `MatchesSuffix`<sup>Optional</sup> <a name="MatchesSuffix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.matchesSuffix"></a>

```csharp
public string[] MatchesSuffix { get; set; }
```

- *Type:* string[]

One or more matching name suffixes to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#matches_suffix GoogleStorageBucket#matches_suffix}

---

##### `NoncurrentTimeBefore`<sup>Optional</sup> <a name="NoncurrentTimeBefore" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.noncurrentTimeBefore"></a>

```csharp
public string NoncurrentTimeBefore { get; set; }
```

- *Type:* string

Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#noncurrent_time_before GoogleStorageBucket#noncurrent_time_before}

---

##### `NumNewerVersions`<sup>Optional</sup> <a name="NumNewerVersions" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.numNewerVersions"></a>

```csharp
public double NumNewerVersions { get; set; }
```

- *Type:* double

Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#num_newer_versions GoogleStorageBucket#num_newer_versions}

---

##### `SendAgeIfZero`<sup>Optional</sup> <a name="SendAgeIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendAgeIfZero"></a>

```csharp
public object SendAgeIfZero { get; set; }
```

- *Type:* object

While set true, age value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the age field. It can be used alone or together with age.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#send_age_if_zero GoogleStorageBucket#send_age_if_zero}

---

##### `SendDaysSinceCustomTimeIfZero`<sup>Optional</sup> <a name="SendDaysSinceCustomTimeIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendDaysSinceCustomTimeIfZero"></a>

```csharp
public object SendDaysSinceCustomTimeIfZero { get; set; }
```

- *Type:* object

While set true, days_since_custom_time value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the days_since_custom_time field. It can be used alone or together with days_since_custom_time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#send_days_since_custom_time_if_zero GoogleStorageBucket#send_days_since_custom_time_if_zero}

---

##### `SendDaysSinceNoncurrentTimeIfZero`<sup>Optional</sup> <a name="SendDaysSinceNoncurrentTimeIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendDaysSinceNoncurrentTimeIfZero"></a>

```csharp
public object SendDaysSinceNoncurrentTimeIfZero { get; set; }
```

- *Type:* object

While set true, days_since_noncurrent_time value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the days_since_noncurrent_time field. It can be used alone or together with days_since_noncurrent_time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#send_days_since_noncurrent_time_if_zero GoogleStorageBucket#send_days_since_noncurrent_time_if_zero}

---

##### `SendNumNewerVersionsIfZero`<sup>Optional</sup> <a name="SendNumNewerVersionsIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.sendNumNewerVersionsIfZero"></a>

```csharp
public object SendNumNewerVersionsIfZero { get; set; }
```

- *Type:* object

While set true, num_newer_versions value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the num_newer_versions field. It can be used alone or together with num_newer_versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#send_num_newer_versions_if_zero GoogleStorageBucket#send_num_newer_versions_if_zero}

---

##### `WithState`<sup>Optional</sup> <a name="WithState" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition.property.withState"></a>

```csharp
public string WithState { get; set; }
```

- *Type:* string

Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#with_state GoogleStorageBucket#with_state}

---

### GoogleStorageBucketLogging <a name="GoogleStorageBucketLogging" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketLogging {
    string LogBucket,
    string LogObjectPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging.property.logBucket">LogBucket</a></code> | <code>string</code> | The bucket that will receive log objects. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging.property.logObjectPrefix">LogObjectPrefix</a></code> | <code>string</code> | The object prefix for log objects. |

---

##### `LogBucket`<sup>Required</sup> <a name="LogBucket" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging.property.logBucket"></a>

```csharp
public string LogBucket { get; set; }
```

- *Type:* string

The bucket that will receive log objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#log_bucket GoogleStorageBucket#log_bucket}

---

##### `LogObjectPrefix`<sup>Optional</sup> <a name="LogObjectPrefix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging.property.logObjectPrefix"></a>

```csharp
public string LogObjectPrefix { get; set; }
```

- *Type:* string

The object prefix for log objects.

If it's not provided, by default Google Cloud Storage sets this to this bucket's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#log_object_prefix GoogleStorageBucket#log_object_prefix}

---

### GoogleStorageBucketRetentionPolicy <a name="GoogleStorageBucketRetentionPolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketRetentionPolicy {
    double RetentionPeriod,
    object IsLocked = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy.property.retentionPeriod">RetentionPeriod</a></code> | <code>double</code> | The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy.property.isLocked">IsLocked</a></code> | <code>object</code> | If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy. |

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy.property.retentionPeriod"></a>

```csharp
public double RetentionPeriod { get; set; }
```

- *Type:* double

The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived.

The value must be less than 3,155,760,000 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#retention_period GoogleStorageBucket#retention_period}

---

##### `IsLocked`<sup>Optional</sup> <a name="IsLocked" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy.property.isLocked"></a>

```csharp
public object IsLocked { get; set; }
```

- *Type:* object

If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy.

Caution: Locking a bucket is an irreversible action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#is_locked GoogleStorageBucket#is_locked}

---

### GoogleStorageBucketSoftDeletePolicy <a name="GoogleStorageBucketSoftDeletePolicy" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketSoftDeletePolicy {
    double RetentionDurationSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy.property.retentionDurationSeconds">RetentionDurationSeconds</a></code> | <code>double</code> | The duration in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted. |

---

##### `RetentionDurationSeconds`<sup>Optional</sup> <a name="RetentionDurationSeconds" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy.property.retentionDurationSeconds"></a>

```csharp
public double RetentionDurationSeconds { get; set; }
```

- *Type:* double

The duration in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted.

Default value is 604800.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#retention_duration_seconds GoogleStorageBucket#retention_duration_seconds}

---

### GoogleStorageBucketTimeouts <a name="GoogleStorageBucketTimeouts" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketTimeouts {
    string Create = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#create GoogleStorageBucket#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#read GoogleStorageBucket#read}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#update GoogleStorageBucket#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#create GoogleStorageBucket#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#read GoogleStorageBucket#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#update GoogleStorageBucket#update}.

---

### GoogleStorageBucketVersioning <a name="GoogleStorageBucketVersioning" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketVersioning {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning.property.enabled">Enabled</a></code> | <code>object</code> | While set to true, versioning is fully enabled for this bucket. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

While set to true, versioning is fully enabled for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#enabled GoogleStorageBucket#enabled}

---

### GoogleStorageBucketWebsite <a name="GoogleStorageBucketWebsite" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketWebsite {
    string MainPageSuffix = null,
    string NotFoundPage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite.property.mainPageSuffix">MainPageSuffix</a></code> | <code>string</code> | Behaves as the bucket's directory index where missing objects are treated as potential directories. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite.property.notFoundPage">NotFoundPage</a></code> | <code>string</code> | The custom object to return when a requested resource is not found. |

---

##### `MainPageSuffix`<sup>Optional</sup> <a name="MainPageSuffix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite.property.mainPageSuffix"></a>

```csharp
public string MainPageSuffix { get; set; }
```

- *Type:* string

Behaves as the bucket's directory index where missing objects are treated as potential directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#main_page_suffix GoogleStorageBucket#main_page_suffix}

---

##### `NotFoundPage`<sup>Optional</sup> <a name="NotFoundPage" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite.property.notFoundPage"></a>

```csharp
public string NotFoundPage { get; set; }
```

- *Type:* string

The custom object to return when a requested resource is not found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_storage_bucket#not_found_page GoogleStorageBucket#not_found_page}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageBucketAutoclassOutputReference <a name="GoogleStorageBucketAutoclassOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketAutoclassOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.resetTerminalStorageClass">ResetTerminalStorageClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTerminalStorageClass` <a name="ResetTerminalStorageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.resetTerminalStorageClass"></a>

```csharp
private void ResetTerminalStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.terminalStorageClassInput">TerminalStorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.terminalStorageClass">TerminalStorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `TerminalStorageClassInput`<sup>Optional</sup> <a name="TerminalStorageClassInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.terminalStorageClassInput"></a>

```csharp
public string TerminalStorageClassInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `TerminalStorageClass`<sup>Required</sup> <a name="TerminalStorageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.terminalStorageClass"></a>

```csharp
public string TerminalStorageClass { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclassOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageBucketAutoclass InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketAutoclass">GoogleStorageBucketAutoclass</a>

---


### GoogleStorageBucketCorsList <a name="GoogleStorageBucketCorsList" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketCorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.get"></a>

```csharp
private GoogleStorageBucketCorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleStorageBucketCorsOutputReference <a name="GoogleStorageBucketCorsOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketCorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetMaxAgeSeconds">ResetMaxAgeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetOrigin">ResetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetResponseHeader">ResetResponseHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxAgeSeconds` <a name="ResetMaxAgeSeconds" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetMaxAgeSeconds"></a>

```csharp
private void ResetMaxAgeSeconds()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetOrigin` <a name="ResetOrigin" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetOrigin"></a>

```csharp
private void ResetOrigin()
```

##### `ResetResponseHeader` <a name="ResetResponseHeader" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.resetResponseHeader"></a>

```csharp
private void ResetResponseHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.maxAgeSecondsInput">MaxAgeSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.methodInput">MethodInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.originInput">OriginInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.responseHeaderInput">ResponseHeaderInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.maxAgeSeconds">MaxAgeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.method">Method</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.origin">Origin</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.responseHeader">ResponseHeader</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxAgeSecondsInput`<sup>Optional</sup> <a name="MaxAgeSecondsInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.maxAgeSecondsInput"></a>

```csharp
public double MaxAgeSecondsInput { get; }
```

- *Type:* double

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.methodInput"></a>

```csharp
public string[] MethodInput { get; }
```

- *Type:* string[]

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.originInput"></a>

```csharp
public string[] OriginInput { get; }
```

- *Type:* string[]

---

##### `ResponseHeaderInput`<sup>Optional</sup> <a name="ResponseHeaderInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.responseHeaderInput"></a>

```csharp
public string[] ResponseHeaderInput { get; }
```

- *Type:* string[]

---

##### `MaxAgeSeconds`<sup>Required</sup> <a name="MaxAgeSeconds" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.maxAgeSeconds"></a>

```csharp
public double MaxAgeSeconds { get; }
```

- *Type:* double

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.method"></a>

```csharp
public string[] Method { get; }
```

- *Type:* string[]

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.origin"></a>

```csharp
public string[] Origin { get; }
```

- *Type:* string[]

---

##### `ResponseHeader`<sup>Required</sup> <a name="ResponseHeader" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.responseHeader"></a>

```csharp
public string[] ResponseHeader { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCorsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleStorageBucketCustomPlacementConfigOutputReference <a name="GoogleStorageBucketCustomPlacementConfigOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketCustomPlacementConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.dataLocationsInput">DataLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.dataLocations">DataLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataLocationsInput`<sup>Optional</sup> <a name="DataLocationsInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.dataLocationsInput"></a>

```csharp
public string[] DataLocationsInput { get; }
```

- *Type:* string[]

---

##### `DataLocations`<sup>Required</sup> <a name="DataLocations" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.dataLocations"></a>

```csharp
public string[] DataLocations { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageBucketCustomPlacementConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketCustomPlacementConfig">GoogleStorageBucketCustomPlacementConfig</a>

---


### GoogleStorageBucketEncryptionOutputReference <a name="GoogleStorageBucketEncryptionOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.defaultKmsKeyNameInput">DefaultKmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.defaultKmsKeyName">DefaultKmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultKmsKeyNameInput`<sup>Optional</sup> <a name="DefaultKmsKeyNameInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.defaultKmsKeyNameInput"></a>

```csharp
public string DefaultKmsKeyNameInput { get; }
```

- *Type:* string

---

##### `DefaultKmsKeyName`<sup>Required</sup> <a name="DefaultKmsKeyName" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.defaultKmsKeyName"></a>

```csharp
public string DefaultKmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryptionOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageBucketEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketEncryption">GoogleStorageBucketEncryption</a>

---


### GoogleStorageBucketHierarchicalNamespaceOutputReference <a name="GoogleStorageBucketHierarchicalNamespaceOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketHierarchicalNamespaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespaceOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageBucketHierarchicalNamespace InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketHierarchicalNamespace">GoogleStorageBucketHierarchicalNamespace</a>

---


### GoogleStorageBucketLifecycleRuleActionOutputReference <a name="GoogleStorageBucketLifecycleRuleActionOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketLifecycleRuleActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.resetStorageClass">ResetStorageClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.resetStorageClass"></a>

```csharp
private void ResetStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction">GoogleStorageBucketLifecycleRuleAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageBucketLifecycleRuleAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction">GoogleStorageBucketLifecycleRuleAction</a>

---


### GoogleStorageBucketLifecycleRuleConditionOutputReference <a name="GoogleStorageBucketLifecycleRuleConditionOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketLifecycleRuleConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetAge">ResetAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetCreatedBefore">ResetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetCustomTimeBefore">ResetCustomTimeBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceCustomTime">ResetDaysSinceCustomTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceNoncurrentTime">ResetDaysSinceNoncurrentTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetMatchesPrefix">ResetMatchesPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetMatchesStorageClass">ResetMatchesStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetMatchesSuffix">ResetMatchesSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetNoncurrentTimeBefore">ResetNoncurrentTimeBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetNumNewerVersions">ResetNumNewerVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendAgeIfZero">ResetSendAgeIfZero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceCustomTimeIfZero">ResetSendDaysSinceCustomTimeIfZero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceNoncurrentTimeIfZero">ResetSendDaysSinceNoncurrentTimeIfZero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendNumNewerVersionsIfZero">ResetSendNumNewerVersionsIfZero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetWithState">ResetWithState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAge` <a name="ResetAge" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetAge"></a>

```csharp
private void ResetAge()
```

##### `ResetCreatedBefore` <a name="ResetCreatedBefore" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetCreatedBefore"></a>

```csharp
private void ResetCreatedBefore()
```

##### `ResetCustomTimeBefore` <a name="ResetCustomTimeBefore" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetCustomTimeBefore"></a>

```csharp
private void ResetCustomTimeBefore()
```

##### `ResetDaysSinceCustomTime` <a name="ResetDaysSinceCustomTime" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceCustomTime"></a>

```csharp
private void ResetDaysSinceCustomTime()
```

##### `ResetDaysSinceNoncurrentTime` <a name="ResetDaysSinceNoncurrentTime" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetDaysSinceNoncurrentTime"></a>

```csharp
private void ResetDaysSinceNoncurrentTime()
```

##### `ResetMatchesPrefix` <a name="ResetMatchesPrefix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetMatchesPrefix"></a>

```csharp
private void ResetMatchesPrefix()
```

##### `ResetMatchesStorageClass` <a name="ResetMatchesStorageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetMatchesStorageClass"></a>

```csharp
private void ResetMatchesStorageClass()
```

##### `ResetMatchesSuffix` <a name="ResetMatchesSuffix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetMatchesSuffix"></a>

```csharp
private void ResetMatchesSuffix()
```

##### `ResetNoncurrentTimeBefore` <a name="ResetNoncurrentTimeBefore" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetNoncurrentTimeBefore"></a>

```csharp
private void ResetNoncurrentTimeBefore()
```

##### `ResetNumNewerVersions` <a name="ResetNumNewerVersions" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetNumNewerVersions"></a>

```csharp
private void ResetNumNewerVersions()
```

##### `ResetSendAgeIfZero` <a name="ResetSendAgeIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendAgeIfZero"></a>

```csharp
private void ResetSendAgeIfZero()
```

##### `ResetSendDaysSinceCustomTimeIfZero` <a name="ResetSendDaysSinceCustomTimeIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceCustomTimeIfZero"></a>

```csharp
private void ResetSendDaysSinceCustomTimeIfZero()
```

##### `ResetSendDaysSinceNoncurrentTimeIfZero` <a name="ResetSendDaysSinceNoncurrentTimeIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendDaysSinceNoncurrentTimeIfZero"></a>

```csharp
private void ResetSendDaysSinceNoncurrentTimeIfZero()
```

##### `ResetSendNumNewerVersionsIfZero` <a name="ResetSendNumNewerVersionsIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetSendNumNewerVersionsIfZero"></a>

```csharp
private void ResetSendNumNewerVersionsIfZero()
```

##### `ResetWithState` <a name="ResetWithState" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.resetWithState"></a>

```csharp
private void ResetWithState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.ageInput">AgeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.createdBeforeInput">CreatedBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.customTimeBeforeInput">CustomTimeBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTimeInput">DaysSinceCustomTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTimeInput">DaysSinceNoncurrentTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefixInput">MatchesPrefixInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClassInput">MatchesStorageClassInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffixInput">MatchesSuffixInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBeforeInput">NoncurrentTimeBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersionsInput">NumNewerVersionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZeroInput">SendAgeIfZeroInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZeroInput">SendDaysSinceCustomTimeIfZeroInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZeroInput">SendDaysSinceNoncurrentTimeIfZeroInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZeroInput">SendNumNewerVersionsIfZeroInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.withStateInput">WithStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.age">Age</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.createdBefore">CreatedBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.customTimeBefore">CustomTimeBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTime">DaysSinceCustomTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTime">DaysSinceNoncurrentTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefix">MatchesPrefix</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClass">MatchesStorageClass</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffix">MatchesSuffix</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBefore">NoncurrentTimeBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersions">NumNewerVersions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZero">SendAgeIfZero</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZero">SendDaysSinceCustomTimeIfZero</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZero">SendDaysSinceNoncurrentTimeIfZero</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZero">SendNumNewerVersionsIfZero</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.withState">WithState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition">GoogleStorageBucketLifecycleRuleCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgeInput`<sup>Optional</sup> <a name="AgeInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.ageInput"></a>

```csharp
public double AgeInput { get; }
```

- *Type:* double

---

##### `CreatedBeforeInput`<sup>Optional</sup> <a name="CreatedBeforeInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.createdBeforeInput"></a>

```csharp
public string CreatedBeforeInput { get; }
```

- *Type:* string

---

##### `CustomTimeBeforeInput`<sup>Optional</sup> <a name="CustomTimeBeforeInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.customTimeBeforeInput"></a>

```csharp
public string CustomTimeBeforeInput { get; }
```

- *Type:* string

---

##### `DaysSinceCustomTimeInput`<sup>Optional</sup> <a name="DaysSinceCustomTimeInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTimeInput"></a>

```csharp
public double DaysSinceCustomTimeInput { get; }
```

- *Type:* double

---

##### `DaysSinceNoncurrentTimeInput`<sup>Optional</sup> <a name="DaysSinceNoncurrentTimeInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTimeInput"></a>

```csharp
public double DaysSinceNoncurrentTimeInput { get; }
```

- *Type:* double

---

##### `MatchesPrefixInput`<sup>Optional</sup> <a name="MatchesPrefixInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefixInput"></a>

```csharp
public string[] MatchesPrefixInput { get; }
```

- *Type:* string[]

---

##### `MatchesStorageClassInput`<sup>Optional</sup> <a name="MatchesStorageClassInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClassInput"></a>

```csharp
public string[] MatchesStorageClassInput { get; }
```

- *Type:* string[]

---

##### `MatchesSuffixInput`<sup>Optional</sup> <a name="MatchesSuffixInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffixInput"></a>

```csharp
public string[] MatchesSuffixInput { get; }
```

- *Type:* string[]

---

##### `NoncurrentTimeBeforeInput`<sup>Optional</sup> <a name="NoncurrentTimeBeforeInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBeforeInput"></a>

```csharp
public string NoncurrentTimeBeforeInput { get; }
```

- *Type:* string

---

##### `NumNewerVersionsInput`<sup>Optional</sup> <a name="NumNewerVersionsInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersionsInput"></a>

```csharp
public double NumNewerVersionsInput { get; }
```

- *Type:* double

---

##### `SendAgeIfZeroInput`<sup>Optional</sup> <a name="SendAgeIfZeroInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZeroInput"></a>

```csharp
public object SendAgeIfZeroInput { get; }
```

- *Type:* object

---

##### `SendDaysSinceCustomTimeIfZeroInput`<sup>Optional</sup> <a name="SendDaysSinceCustomTimeIfZeroInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZeroInput"></a>

```csharp
public object SendDaysSinceCustomTimeIfZeroInput { get; }
```

- *Type:* object

---

##### `SendDaysSinceNoncurrentTimeIfZeroInput`<sup>Optional</sup> <a name="SendDaysSinceNoncurrentTimeIfZeroInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZeroInput"></a>

```csharp
public object SendDaysSinceNoncurrentTimeIfZeroInput { get; }
```

- *Type:* object

---

##### `SendNumNewerVersionsIfZeroInput`<sup>Optional</sup> <a name="SendNumNewerVersionsIfZeroInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZeroInput"></a>

```csharp
public object SendNumNewerVersionsIfZeroInput { get; }
```

- *Type:* object

---

##### `WithStateInput`<sup>Optional</sup> <a name="WithStateInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.withStateInput"></a>

```csharp
public string WithStateInput { get; }
```

- *Type:* string

---

##### `Age`<sup>Required</sup> <a name="Age" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.age"></a>

```csharp
public double Age { get; }
```

- *Type:* double

---

##### `CreatedBefore`<sup>Required</sup> <a name="CreatedBefore" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.createdBefore"></a>

```csharp
public string CreatedBefore { get; }
```

- *Type:* string

---

##### `CustomTimeBefore`<sup>Required</sup> <a name="CustomTimeBefore" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.customTimeBefore"></a>

```csharp
public string CustomTimeBefore { get; }
```

- *Type:* string

---

##### `DaysSinceCustomTime`<sup>Required</sup> <a name="DaysSinceCustomTime" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTime"></a>

```csharp
public double DaysSinceCustomTime { get; }
```

- *Type:* double

---

##### `DaysSinceNoncurrentTime`<sup>Required</sup> <a name="DaysSinceNoncurrentTime" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTime"></a>

```csharp
public double DaysSinceNoncurrentTime { get; }
```

- *Type:* double

---

##### `MatchesPrefix`<sup>Required</sup> <a name="MatchesPrefix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefix"></a>

```csharp
public string[] MatchesPrefix { get; }
```

- *Type:* string[]

---

##### `MatchesStorageClass`<sup>Required</sup> <a name="MatchesStorageClass" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClass"></a>

```csharp
public string[] MatchesStorageClass { get; }
```

- *Type:* string[]

---

##### `MatchesSuffix`<sup>Required</sup> <a name="MatchesSuffix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffix"></a>

```csharp
public string[] MatchesSuffix { get; }
```

- *Type:* string[]

---

##### `NoncurrentTimeBefore`<sup>Required</sup> <a name="NoncurrentTimeBefore" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBefore"></a>

```csharp
public string NoncurrentTimeBefore { get; }
```

- *Type:* string

---

##### `NumNewerVersions`<sup>Required</sup> <a name="NumNewerVersions" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersions"></a>

```csharp
public double NumNewerVersions { get; }
```

- *Type:* double

---

##### `SendAgeIfZero`<sup>Required</sup> <a name="SendAgeIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZero"></a>

```csharp
public object SendAgeIfZero { get; }
```

- *Type:* object

---

##### `SendDaysSinceCustomTimeIfZero`<sup>Required</sup> <a name="SendDaysSinceCustomTimeIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZero"></a>

```csharp
public object SendDaysSinceCustomTimeIfZero { get; }
```

- *Type:* object

---

##### `SendDaysSinceNoncurrentTimeIfZero`<sup>Required</sup> <a name="SendDaysSinceNoncurrentTimeIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZero"></a>

```csharp
public object SendDaysSinceNoncurrentTimeIfZero { get; }
```

- *Type:* object

---

##### `SendNumNewerVersionsIfZero`<sup>Required</sup> <a name="SendNumNewerVersionsIfZero" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZero"></a>

```csharp
public object SendNumNewerVersionsIfZero { get; }
```

- *Type:* object

---

##### `WithState`<sup>Required</sup> <a name="WithState" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.withState"></a>

```csharp
public string WithState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageBucketLifecycleRuleCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition">GoogleStorageBucketLifecycleRuleCondition</a>

---


### GoogleStorageBucketLifecycleRuleList <a name="GoogleStorageBucketLifecycleRuleList" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketLifecycleRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.get"></a>

```csharp
private GoogleStorageBucketLifecycleRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleStorageBucketLifecycleRuleOutputReference <a name="GoogleStorageBucketLifecycleRuleOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketLifecycleRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putCondition">PutCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putAction"></a>

```csharp
private void PutAction(GoogleStorageBucketLifecycleRuleAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction">GoogleStorageBucketLifecycleRuleAction</a>

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putCondition"></a>

```csharp
private void PutCondition(GoogleStorageBucketLifecycleRuleCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition">GoogleStorageBucketLifecycleRuleCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference">GoogleStorageBucketLifecycleRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference">GoogleStorageBucketLifecycleRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction">GoogleStorageBucketLifecycleRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition">GoogleStorageBucketLifecycleRuleCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.action"></a>

```csharp
public GoogleStorageBucketLifecycleRuleActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleActionOutputReference">GoogleStorageBucketLifecycleRuleActionOutputReference</a>

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.condition"></a>

```csharp
public GoogleStorageBucketLifecycleRuleConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleConditionOutputReference">GoogleStorageBucketLifecycleRuleConditionOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.actionInput"></a>

```csharp
public GoogleStorageBucketLifecycleRuleAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleAction">GoogleStorageBucketLifecycleRuleAction</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.conditionInput"></a>

```csharp
public GoogleStorageBucketLifecycleRuleCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleCondition">GoogleStorageBucketLifecycleRuleCondition</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLifecycleRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleStorageBucketLoggingOutputReference <a name="GoogleStorageBucketLoggingOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.resetLogObjectPrefix">ResetLogObjectPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogObjectPrefix` <a name="ResetLogObjectPrefix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.resetLogObjectPrefix"></a>

```csharp
private void ResetLogObjectPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logBucketInput">LogBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logObjectPrefixInput">LogObjectPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logBucket">LogBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logObjectPrefix">LogObjectPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogBucketInput`<sup>Optional</sup> <a name="LogBucketInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logBucketInput"></a>

```csharp
public string LogBucketInput { get; }
```

- *Type:* string

---

##### `LogObjectPrefixInput`<sup>Optional</sup> <a name="LogObjectPrefixInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logObjectPrefixInput"></a>

```csharp
public string LogObjectPrefixInput { get; }
```

- *Type:* string

---

##### `LogBucket`<sup>Required</sup> <a name="LogBucket" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logBucket"></a>

```csharp
public string LogBucket { get; }
```

- *Type:* string

---

##### `LogObjectPrefix`<sup>Required</sup> <a name="LogObjectPrefix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.logObjectPrefix"></a>

```csharp
public string LogObjectPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLoggingOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageBucketLogging InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketLogging">GoogleStorageBucketLogging</a>

---


### GoogleStorageBucketRetentionPolicyOutputReference <a name="GoogleStorageBucketRetentionPolicyOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketRetentionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.resetIsLocked">ResetIsLocked</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsLocked` <a name="ResetIsLocked" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.resetIsLocked"></a>

```csharp
private void ResetIsLocked()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.isLockedInput">IsLockedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.retentionPeriodInput">RetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.isLocked">IsLocked</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.retentionPeriod">RetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsLockedInput`<sup>Optional</sup> <a name="IsLockedInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.isLockedInput"></a>

```csharp
public object IsLockedInput { get; }
```

- *Type:* object

---

##### `RetentionPeriodInput`<sup>Optional</sup> <a name="RetentionPeriodInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.retentionPeriodInput"></a>

```csharp
public double RetentionPeriodInput { get; }
```

- *Type:* double

---

##### `IsLocked`<sup>Required</sup> <a name="IsLocked" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.isLocked"></a>

```csharp
public object IsLocked { get; }
```

- *Type:* object

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.retentionPeriod"></a>

```csharp
public double RetentionPeriod { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageBucketRetentionPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketRetentionPolicy">GoogleStorageBucketRetentionPolicy</a>

---


### GoogleStorageBucketSoftDeletePolicyOutputReference <a name="GoogleStorageBucketSoftDeletePolicyOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketSoftDeletePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.resetRetentionDurationSeconds">ResetRetentionDurationSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetentionDurationSeconds` <a name="ResetRetentionDurationSeconds" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.resetRetentionDurationSeconds"></a>

```csharp
private void ResetRetentionDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.effectiveTime">EffectiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSecondsInput">RetentionDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSeconds">RetentionDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveTime`<sup>Required</sup> <a name="EffectiveTime" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.effectiveTime"></a>

```csharp
public string EffectiveTime { get; }
```

- *Type:* string

---

##### `RetentionDurationSecondsInput`<sup>Optional</sup> <a name="RetentionDurationSecondsInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSecondsInput"></a>

```csharp
public double RetentionDurationSecondsInput { get; }
```

- *Type:* double

---

##### `RetentionDurationSeconds`<sup>Required</sup> <a name="RetentionDurationSeconds" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSeconds"></a>

```csharp
public double RetentionDurationSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageBucketSoftDeletePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketSoftDeletePolicy">GoogleStorageBucketSoftDeletePolicy</a>

---


### GoogleStorageBucketTimeoutsOutputReference <a name="GoogleStorageBucketTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleStorageBucketVersioningOutputReference <a name="GoogleStorageBucketVersioningOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketVersioningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioningOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageBucketVersioning InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketVersioning">GoogleStorageBucketVersioning</a>

---


### GoogleStorageBucketWebsiteOutputReference <a name="GoogleStorageBucketWebsiteOutputReference" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketWebsiteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.resetMainPageSuffix">ResetMainPageSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.resetNotFoundPage">ResetNotFoundPage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMainPageSuffix` <a name="ResetMainPageSuffix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.resetMainPageSuffix"></a>

```csharp
private void ResetMainPageSuffix()
```

##### `ResetNotFoundPage` <a name="ResetNotFoundPage" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.resetNotFoundPage"></a>

```csharp
private void ResetNotFoundPage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.mainPageSuffixInput">MainPageSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.notFoundPageInput">NotFoundPageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.mainPageSuffix">MainPageSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.notFoundPage">NotFoundPage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MainPageSuffixInput`<sup>Optional</sup> <a name="MainPageSuffixInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.mainPageSuffixInput"></a>

```csharp
public string MainPageSuffixInput { get; }
```

- *Type:* string

---

##### `NotFoundPageInput`<sup>Optional</sup> <a name="NotFoundPageInput" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.notFoundPageInput"></a>

```csharp
public string NotFoundPageInput { get; }
```

- *Type:* string

---

##### `MainPageSuffix`<sup>Required</sup> <a name="MainPageSuffix" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.mainPageSuffix"></a>

```csharp
public string MainPageSuffix { get; }
```

- *Type:* string

---

##### `NotFoundPage`<sup>Required</sup> <a name="NotFoundPage" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.notFoundPage"></a>

```csharp
public string NotFoundPage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsiteOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageBucketWebsite InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucket.GoogleStorageBucketWebsite">GoogleStorageBucketWebsite</a>

---



