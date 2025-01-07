# `googleVertexAiFeaturestore` Submodule <a name="`googleVertexAiFeaturestore` Submodule" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiFeaturestore <a name="GoogleVertexAiFeaturestore" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore google_vertex_ai_featurestore}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiFeaturestore(Construct Scope, string Id, GoogleVertexAiFeaturestoreConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig">GoogleVertexAiFeaturestoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig">GoogleVertexAiFeaturestoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putOnlineServingConfig">PutOnlineServingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetOnlineServingConfig">ResetOnlineServingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetOnlineStorageTtlDays">ResetOnlineStorageTtlDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putEncryptionSpec"></a>

```csharp
private void PutEncryptionSpec(GoogleVertexAiFeaturestoreEncryptionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec">GoogleVertexAiFeaturestoreEncryptionSpec</a>

---

##### `PutOnlineServingConfig` <a name="PutOnlineServingConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putOnlineServingConfig"></a>

```csharp
private void PutOnlineServingConfig(GoogleVertexAiFeaturestoreOnlineServingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putOnlineServingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig">GoogleVertexAiFeaturestoreOnlineServingConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleVertexAiFeaturestoreTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts">GoogleVertexAiFeaturestoreTimeouts</a>

---

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetEncryptionSpec"></a>

```csharp
private void ResetEncryptionSpec()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOnlineServingConfig` <a name="ResetOnlineServingConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetOnlineServingConfig"></a>

```csharp
private void ResetOnlineServingConfig()
```

##### `ResetOnlineStorageTtlDays` <a name="ResetOnlineStorageTtlDays" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetOnlineStorageTtlDays"></a>

```csharp
private void ResetOnlineStorageTtlDays()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVertexAiFeaturestore resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleVertexAiFeaturestore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleVertexAiFeaturestore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleVertexAiFeaturestore.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleVertexAiFeaturestore.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleVertexAiFeaturestore resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiFeaturestore to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiFeaturestore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiFeaturestore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference">GoogleVertexAiFeaturestoreEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineServingConfig">OnlineServingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference">GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference">GoogleVertexAiFeaturestoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec">GoogleVertexAiFeaturestoreEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineServingConfigInput">OnlineServingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig">GoogleVertexAiFeaturestoreOnlineServingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineStorageTtlDaysInput">OnlineStorageTtlDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineStorageTtlDays">OnlineStorageTtlDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.encryptionSpec"></a>

```csharp
public GoogleVertexAiFeaturestoreEncryptionSpecOutputReference EncryptionSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference">GoogleVertexAiFeaturestoreEncryptionSpecOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `OnlineServingConfig`<sup>Required</sup> <a name="OnlineServingConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineServingConfig"></a>

```csharp
public GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference OnlineServingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference">GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.timeouts"></a>

```csharp
public GoogleVertexAiFeaturestoreTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference">GoogleVertexAiFeaturestoreTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.encryptionSpecInput"></a>

```csharp
public GoogleVertexAiFeaturestoreEncryptionSpec EncryptionSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec">GoogleVertexAiFeaturestoreEncryptionSpec</a>

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.forceDestroyInput"></a>

```csharp
public object ForceDestroyInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OnlineServingConfigInput`<sup>Optional</sup> <a name="OnlineServingConfigInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineServingConfigInput"></a>

```csharp
public GoogleVertexAiFeaturestoreOnlineServingConfig OnlineServingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig">GoogleVertexAiFeaturestoreOnlineServingConfig</a>

---

##### `OnlineStorageTtlDaysInput`<sup>Optional</sup> <a name="OnlineStorageTtlDaysInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineStorageTtlDaysInput"></a>

```csharp
public double OnlineStorageTtlDaysInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OnlineStorageTtlDays`<sup>Required</sup> <a name="OnlineStorageTtlDays" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineStorageTtlDays"></a>

```csharp
public double OnlineStorageTtlDays { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiFeaturestoreConfig <a name="GoogleVertexAiFeaturestoreConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiFeaturestoreConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleVertexAiFeaturestoreEncryptionSpec EncryptionSpec = null,
    object ForceDestroy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null,
    GoogleVertexAiFeaturestoreOnlineServingConfig OnlineServingConfig = null,
    double OnlineStorageTtlDays = null,
    string Project = null,
    string Region = null,
    GoogleVertexAiFeaturestoreTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec">GoogleVertexAiFeaturestoreEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | If set to true, any EntityTypes and Features for this Featurestore will also be deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#id GoogleVertexAiFeaturestore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A set of key/value label pairs to assign to this Featurestore. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.name">Name</a></code> | <code>string</code> | The name of the Featurestore. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.onlineServingConfig">OnlineServingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig">GoogleVertexAiFeaturestoreOnlineServingConfig</a></code> | online_serving_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.onlineStorageTtlDays">OnlineStorageTtlDays</a></code> | <code>double</code> | TTL in days for feature values that will be stored in online serving storage. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#project GoogleVertexAiFeaturestore#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.region">Region</a></code> | <code>string</code> | The region of the dataset. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts">GoogleVertexAiFeaturestoreTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.encryptionSpec"></a>

```csharp
public GoogleVertexAiFeaturestoreEncryptionSpec EncryptionSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec">GoogleVertexAiFeaturestoreEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#encryption_spec GoogleVertexAiFeaturestore#encryption_spec}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; set; }
```

- *Type:* object

If set to true, any EntityTypes and Features for this Featurestore will also be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#force_destroy GoogleVertexAiFeaturestore#force_destroy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#id GoogleVertexAiFeaturestore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A set of key/value label pairs to assign to this Featurestore.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#labels GoogleVertexAiFeaturestore#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Featurestore.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#name GoogleVertexAiFeaturestore#name}

---

##### `OnlineServingConfig`<sup>Optional</sup> <a name="OnlineServingConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.onlineServingConfig"></a>

```csharp
public GoogleVertexAiFeaturestoreOnlineServingConfig OnlineServingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig">GoogleVertexAiFeaturestoreOnlineServingConfig</a>

online_serving_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#online_serving_config GoogleVertexAiFeaturestore#online_serving_config}

---

##### `OnlineStorageTtlDays`<sup>Optional</sup> <a name="OnlineStorageTtlDays" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.onlineStorageTtlDays"></a>

```csharp
public double OnlineStorageTtlDays { get; set; }
```

- *Type:* double

TTL in days for feature values that will be stored in online serving storage.

The Feature Store online storage periodically removes obsolete feature values older than onlineStorageTtlDays since the feature generation time. Note that onlineStorageTtlDays should be less than or equal to offlineStorageTtlDays for each EntityType under a featurestore. If not set, default to 4000 days

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#online_storage_ttl_days GoogleVertexAiFeaturestore#online_storage_ttl_days}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#project GoogleVertexAiFeaturestore#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the dataset. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#region GoogleVertexAiFeaturestore#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.timeouts"></a>

```csharp
public GoogleVertexAiFeaturestoreTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts">GoogleVertexAiFeaturestoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#timeouts GoogleVertexAiFeaturestore#timeouts}

---

### GoogleVertexAiFeaturestoreEncryptionSpec <a name="GoogleVertexAiFeaturestoreEncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiFeaturestoreEncryptionSpec {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.

Has the form: projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key. The key needs to be in the same region as where the compute resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#kms_key_name GoogleVertexAiFeaturestore#kms_key_name}

---

### GoogleVertexAiFeaturestoreOnlineServingConfig <a name="GoogleVertexAiFeaturestoreOnlineServingConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiFeaturestoreOnlineServingConfig {
    double FixedNodeCount = null,
    GoogleVertexAiFeaturestoreOnlineServingConfigScaling Scaling = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig.property.fixedNodeCount">FixedNodeCount</a></code> | <code>double</code> | The number of nodes for each cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig.property.scaling">Scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling">GoogleVertexAiFeaturestoreOnlineServingConfigScaling</a></code> | scaling block. |

---

##### `FixedNodeCount`<sup>Optional</sup> <a name="FixedNodeCount" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig.property.fixedNodeCount"></a>

```csharp
public double FixedNodeCount { get; set; }
```

- *Type:* double

The number of nodes for each cluster.

The number of nodes will not scale automatically but can be scaled manually by providing different values when updating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#fixed_node_count GoogleVertexAiFeaturestore#fixed_node_count}

---

##### `Scaling`<sup>Optional</sup> <a name="Scaling" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig.property.scaling"></a>

```csharp
public GoogleVertexAiFeaturestoreOnlineServingConfigScaling Scaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling">GoogleVertexAiFeaturestoreOnlineServingConfigScaling</a>

scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#scaling GoogleVertexAiFeaturestore#scaling}

---

### GoogleVertexAiFeaturestoreOnlineServingConfigScaling <a name="GoogleVertexAiFeaturestoreOnlineServingConfigScaling" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiFeaturestoreOnlineServingConfigScaling {
    double MaxNodeCount,
    double MinNodeCount
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling.property.maxNodeCount">MaxNodeCount</a></code> | <code>double</code> | The maximum number of nodes to scale up to. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling.property.minNodeCount">MinNodeCount</a></code> | <code>double</code> | The minimum number of nodes to scale down to. Must be greater than or equal to 1. |

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling.property.maxNodeCount"></a>

```csharp
public double MaxNodeCount { get; set; }
```

- *Type:* double

The maximum number of nodes to scale up to.

Must be greater than minNodeCount, and less than or equal to 10 times of 'minNodeCount'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#max_node_count GoogleVertexAiFeaturestore#max_node_count}

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling.property.minNodeCount"></a>

```csharp
public double MinNodeCount { get; set; }
```

- *Type:* double

The minimum number of nodes to scale down to. Must be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#min_node_count GoogleVertexAiFeaturestore#min_node_count}

---

### GoogleVertexAiFeaturestoreTimeouts <a name="GoogleVertexAiFeaturestoreTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiFeaturestoreTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#create GoogleVertexAiFeaturestore#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#delete GoogleVertexAiFeaturestore#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#update GoogleVertexAiFeaturestore#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#create GoogleVertexAiFeaturestore#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#delete GoogleVertexAiFeaturestore#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_featurestore#update GoogleVertexAiFeaturestore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiFeaturestoreEncryptionSpecOutputReference <a name="GoogleVertexAiFeaturestoreEncryptionSpecOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiFeaturestoreEncryptionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec">GoogleVertexAiFeaturestoreEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiFeaturestoreEncryptionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec">GoogleVertexAiFeaturestoreEncryptionSpec</a>

---


### GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference <a name="GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.putScaling">PutScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.resetFixedNodeCount">ResetFixedNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.resetScaling">ResetScaling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScaling` <a name="PutScaling" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.putScaling"></a>

```csharp
private void PutScaling(GoogleVertexAiFeaturestoreOnlineServingConfigScaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.putScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling">GoogleVertexAiFeaturestoreOnlineServingConfigScaling</a>

---

##### `ResetFixedNodeCount` <a name="ResetFixedNodeCount" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.resetFixedNodeCount"></a>

```csharp
private void ResetFixedNodeCount()
```

##### `ResetScaling` <a name="ResetScaling" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.resetScaling"></a>

```csharp
private void ResetScaling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.scaling">Scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference">GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.fixedNodeCountInput">FixedNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.scalingInput">ScalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling">GoogleVertexAiFeaturestoreOnlineServingConfigScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.fixedNodeCount">FixedNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig">GoogleVertexAiFeaturestoreOnlineServingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Scaling`<sup>Required</sup> <a name="Scaling" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.scaling"></a>

```csharp
public GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference Scaling { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference">GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference</a>

---

##### `FixedNodeCountInput`<sup>Optional</sup> <a name="FixedNodeCountInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.fixedNodeCountInput"></a>

```csharp
public double FixedNodeCountInput { get; }
```

- *Type:* double

---

##### `ScalingInput`<sup>Optional</sup> <a name="ScalingInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.scalingInput"></a>

```csharp
public GoogleVertexAiFeaturestoreOnlineServingConfigScaling ScalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling">GoogleVertexAiFeaturestoreOnlineServingConfigScaling</a>

---

##### `FixedNodeCount`<sup>Required</sup> <a name="FixedNodeCount" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.fixedNodeCount"></a>

```csharp
public double FixedNodeCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiFeaturestoreOnlineServingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig">GoogleVertexAiFeaturestoreOnlineServingConfig</a>

---


### GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference <a name="GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.maxNodeCountInput">MaxNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.minNodeCountInput">MinNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.maxNodeCount">MaxNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.minNodeCount">MinNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling">GoogleVertexAiFeaturestoreOnlineServingConfigScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxNodeCountInput`<sup>Optional</sup> <a name="MaxNodeCountInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.maxNodeCountInput"></a>

```csharp
public double MaxNodeCountInput { get; }
```

- *Type:* double

---

##### `MinNodeCountInput`<sup>Optional</sup> <a name="MinNodeCountInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.minNodeCountInput"></a>

```csharp
public double MinNodeCountInput { get; }
```

- *Type:* double

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.maxNodeCount"></a>

```csharp
public double MaxNodeCount { get; }
```

- *Type:* double

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.minNodeCount"></a>

```csharp
public double MinNodeCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiFeaturestoreOnlineServingConfigScaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling">GoogleVertexAiFeaturestoreOnlineServingConfigScaling</a>

---


### GoogleVertexAiFeaturestoreTimeoutsOutputReference <a name="GoogleVertexAiFeaturestoreTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiFeaturestoreTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



