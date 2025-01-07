# `googleDataplexDatascan` Submodule <a name="`googleDataplexDatascan` Submodule" id="@cdktf/provider-google-beta.googleDataplexDatascan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexDatascan <a name="GoogleDataplexDatascan" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan google_dataplex_datascan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascan(Construct Scope, string Id, GoogleDataplexDatascanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig">GoogleDataplexDatascanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig">GoogleDataplexDatascanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putData">PutData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataProfileSpec">PutDataProfileSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataQualitySpec">PutDataQualitySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putExecutionSpec">PutExecutionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDataProfileSpec">ResetDataProfileSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDataQualitySpec">ResetDataQualitySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutData` <a name="PutData" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putData"></a>

```csharp
private void PutData(GoogleDataplexDatascanData Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData">GoogleDataplexDatascanData</a>

---

##### `PutDataProfileSpec` <a name="PutDataProfileSpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataProfileSpec"></a>

```csharp
private void PutDataProfileSpec(GoogleDataplexDatascanDataProfileSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataProfileSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec">GoogleDataplexDatascanDataProfileSpec</a>

---

##### `PutDataQualitySpec` <a name="PutDataQualitySpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataQualitySpec"></a>

```csharp
private void PutDataQualitySpec(GoogleDataplexDatascanDataQualitySpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataQualitySpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec">GoogleDataplexDatascanDataQualitySpec</a>

---

##### `PutExecutionSpec` <a name="PutExecutionSpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putExecutionSpec"></a>

```csharp
private void PutExecutionSpec(GoogleDataplexDatascanExecutionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putExecutionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec">GoogleDataplexDatascanExecutionSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDataplexDatascanTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts">GoogleDataplexDatascanTimeouts</a>

---

##### `ResetDataProfileSpec` <a name="ResetDataProfileSpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDataProfileSpec"></a>

```csharp
private void ResetDataProfileSpec()
```

##### `ResetDataQualitySpec` <a name="ResetDataQualitySpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDataQualitySpec"></a>

```csharp
private void ResetDataQualitySpec()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataplexDatascan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataplexDatascan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataplexDatascan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataplexDatascan.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataplexDatascan.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDataplexDatascan resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataplexDatascan to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataplexDatascan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataplexDatascan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.data">Data</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference">GoogleDataplexDatascanDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataProfileSpec">DataProfileSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference">GoogleDataplexDatascanDataProfileSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataQualitySpec">DataQualitySpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference">GoogleDataplexDatascanDataQualitySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.executionSpec">ExecutionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference">GoogleDataplexDatascanExecutionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.executionStatus">ExecutionStatus</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList">GoogleDataplexDatascanExecutionStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference">GoogleDataplexDatascanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataInput">DataInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData">GoogleDataplexDatascanData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataProfileSpecInput">DataProfileSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec">GoogleDataplexDatascanDataProfileSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataQualitySpecInput">DataQualitySpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec">GoogleDataplexDatascanDataQualitySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataScanIdInput">DataScanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.executionSpecInput">ExecutionSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec">GoogleDataplexDatascanExecutionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataScanId">DataScanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.data"></a>

```csharp
public GoogleDataplexDatascanDataOutputReference Data { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference">GoogleDataplexDatascanDataOutputReference</a>

---

##### `DataProfileSpec`<sup>Required</sup> <a name="DataProfileSpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataProfileSpec"></a>

```csharp
public GoogleDataplexDatascanDataProfileSpecOutputReference DataProfileSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference">GoogleDataplexDatascanDataProfileSpecOutputReference</a>

---

##### `DataQualitySpec`<sup>Required</sup> <a name="DataQualitySpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataQualitySpec"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecOutputReference DataQualitySpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference">GoogleDataplexDatascanDataQualitySpecOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ExecutionSpec`<sup>Required</sup> <a name="ExecutionSpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.executionSpec"></a>

```csharp
public GoogleDataplexDatascanExecutionSpecOutputReference ExecutionSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference">GoogleDataplexDatascanExecutionSpecOutputReference</a>

---

##### `ExecutionStatus`<sup>Required</sup> <a name="ExecutionStatus" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.executionStatus"></a>

```csharp
public GoogleDataplexDatascanExecutionStatusList ExecutionStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList">GoogleDataplexDatascanExecutionStatusList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.timeouts"></a>

```csharp
public GoogleDataplexDatascanTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference">GoogleDataplexDatascanTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataInput"></a>

```csharp
public GoogleDataplexDatascanData DataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData">GoogleDataplexDatascanData</a>

---

##### `DataProfileSpecInput`<sup>Optional</sup> <a name="DataProfileSpecInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataProfileSpecInput"></a>

```csharp
public GoogleDataplexDatascanDataProfileSpec DataProfileSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec">GoogleDataplexDatascanDataProfileSpec</a>

---

##### `DataQualitySpecInput`<sup>Optional</sup> <a name="DataQualitySpecInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataQualitySpecInput"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpec DataQualitySpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec">GoogleDataplexDatascanDataQualitySpec</a>

---

##### `DataScanIdInput`<sup>Optional</sup> <a name="DataScanIdInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataScanIdInput"></a>

```csharp
public string DataScanIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExecutionSpecInput`<sup>Optional</sup> <a name="ExecutionSpecInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.executionSpecInput"></a>

```csharp
public GoogleDataplexDatascanExecutionSpec ExecutionSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec">GoogleDataplexDatascanExecutionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DataScanId`<sup>Required</sup> <a name="DataScanId" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataScanId"></a>

```csharp
public string DataScanId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexDatascanConfig <a name="GoogleDataplexDatascanConfig" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleDataplexDatascanData Data,
    string DataScanId,
    GoogleDataplexDatascanExecutionSpec ExecutionSpec,
    string Location,
    GoogleDataplexDatascanDataProfileSpec DataProfileSpec = null,
    GoogleDataplexDatascanDataQualitySpec DataQualitySpec = null,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleDataplexDatascanTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.data">Data</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData">GoogleDataplexDatascanData</a></code> | data block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dataScanId">DataScanId</a></code> | <code>string</code> | DataScan identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.executionSpec">ExecutionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec">GoogleDataplexDatascanExecutionSpec</a></code> | execution_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.location">Location</a></code> | <code>string</code> | The location where the data scan should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dataProfileSpec">DataProfileSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec">GoogleDataplexDatascanDataProfileSpec</a></code> | data_profile_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dataQualitySpec">DataQualitySpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec">GoogleDataplexDatascanDataQualitySpec</a></code> | data_quality_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.description">Description</a></code> | <code>string</code> | Description of the scan. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User friendly display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#id GoogleDataplexDatascan#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-defined labels for the scan. A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#project GoogleDataplexDatascan#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts">GoogleDataplexDatascanTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.data"></a>

```csharp
public GoogleDataplexDatascanData Data { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData">GoogleDataplexDatascanData</a>

data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#data GoogleDataplexDatascan#data}

---

##### `DataScanId`<sup>Required</sup> <a name="DataScanId" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dataScanId"></a>

```csharp
public string DataScanId { get; set; }
```

- *Type:* string

DataScan identifier.

Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#data_scan_id GoogleDataplexDatascan#data_scan_id}

---

##### `ExecutionSpec`<sup>Required</sup> <a name="ExecutionSpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.executionSpec"></a>

```csharp
public GoogleDataplexDatascanExecutionSpec ExecutionSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec">GoogleDataplexDatascanExecutionSpec</a>

execution_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#execution_spec GoogleDataplexDatascan#execution_spec}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location where the data scan should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#location GoogleDataplexDatascan#location}

---

##### `DataProfileSpec`<sup>Optional</sup> <a name="DataProfileSpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dataProfileSpec"></a>

```csharp
public GoogleDataplexDatascanDataProfileSpec DataProfileSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec">GoogleDataplexDatascanDataProfileSpec</a>

data_profile_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#data_profile_spec GoogleDataplexDatascan#data_profile_spec}

---

##### `DataQualitySpec`<sup>Optional</sup> <a name="DataQualitySpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dataQualitySpec"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpec DataQualitySpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec">GoogleDataplexDatascanDataQualitySpec</a>

data_quality_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#data_quality_spec GoogleDataplexDatascan#data_quality_spec}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#description GoogleDataplexDatascan#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#display_name GoogleDataplexDatascan#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#id GoogleDataplexDatascan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-defined labels for the scan. A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#labels GoogleDataplexDatascan#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#project GoogleDataplexDatascan#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.timeouts"></a>

```csharp
public GoogleDataplexDatascanTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts">GoogleDataplexDatascanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#timeouts GoogleDataplexDatascan#timeouts}

---

### GoogleDataplexDatascanData <a name="GoogleDataplexDatascanData" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanData {
    string Entity = null,
    string Resource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData.property.entity">Entity</a></code> | <code>string</code> | The Dataplex entity that represents the data source(e.g. BigQuery table) for Datascan. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData.property.resource">Resource</a></code> | <code>string</code> | The service-qualified full resource name of the cloud resource for a DataScan job to scan against. |

---

##### `Entity`<sup>Optional</sup> <a name="Entity" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData.property.entity"></a>

```csharp
public string Entity { get; set; }
```

- *Type:* string

The Dataplex entity that represents the data source(e.g. BigQuery table) for Datascan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#entity GoogleDataplexDatascan#entity}

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

The service-qualified full resource name of the cloud resource for a DataScan job to scan against.

The field could be:
(Cloud Storage bucket for DataDiscoveryScan)BigQuery table of type "TABLE" for DataProfileScan/DataQualityScan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#resource GoogleDataplexDatascan#resource}

---

### GoogleDataplexDatascanDataProfileSpec <a name="GoogleDataplexDatascanDataProfileSpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataProfileSpec {
    GoogleDataplexDatascanDataProfileSpecExcludeFields ExcludeFields = null,
    GoogleDataplexDatascanDataProfileSpecIncludeFields IncludeFields = null,
    GoogleDataplexDatascanDataProfileSpecPostScanActions PostScanActions = null,
    string RowFilter = null,
    double SamplingPercent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.excludeFields">ExcludeFields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields">GoogleDataplexDatascanDataProfileSpecExcludeFields</a></code> | exclude_fields block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.includeFields">IncludeFields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields">GoogleDataplexDatascanDataProfileSpecIncludeFields</a></code> | include_fields block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.postScanActions">PostScanActions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions">GoogleDataplexDatascanDataProfileSpecPostScanActions</a></code> | post_scan_actions block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.rowFilter">RowFilter</a></code> | <code>string</code> | A filter applied to all rows in a single DataScan job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.samplingPercent">SamplingPercent</a></code> | <code>double</code> | The percentage of the records to be selected from the dataset for DataScan. |

---

##### `ExcludeFields`<sup>Optional</sup> <a name="ExcludeFields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.excludeFields"></a>

```csharp
public GoogleDataplexDatascanDataProfileSpecExcludeFields ExcludeFields { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields">GoogleDataplexDatascanDataProfileSpecExcludeFields</a>

exclude_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#exclude_fields GoogleDataplexDatascan#exclude_fields}

---

##### `IncludeFields`<sup>Optional</sup> <a name="IncludeFields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.includeFields"></a>

```csharp
public GoogleDataplexDatascanDataProfileSpecIncludeFields IncludeFields { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields">GoogleDataplexDatascanDataProfileSpecIncludeFields</a>

include_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#include_fields GoogleDataplexDatascan#include_fields}

---

##### `PostScanActions`<sup>Optional</sup> <a name="PostScanActions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.postScanActions"></a>

```csharp
public GoogleDataplexDatascanDataProfileSpecPostScanActions PostScanActions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions">GoogleDataplexDatascanDataProfileSpecPostScanActions</a>

post_scan_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#post_scan_actions GoogleDataplexDatascan#post_scan_actions}

---

##### `RowFilter`<sup>Optional</sup> <a name="RowFilter" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.rowFilter"></a>

```csharp
public string RowFilter { get; set; }
```

- *Type:* string

A filter applied to all rows in a single DataScan job.

The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#row_filter GoogleDataplexDatascan#row_filter}

---

##### `SamplingPercent`<sup>Optional</sup> <a name="SamplingPercent" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.samplingPercent"></a>

```csharp
public double SamplingPercent { get; set; }
```

- *Type:* double

The percentage of the records to be selected from the dataset for DataScan.

Value can range between 0.0 and 100.0 with up to 3 significant decimal digits.
Sampling is not applied if 'sampling_percent' is not specified, 0 or 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#sampling_percent GoogleDataplexDatascan#sampling_percent}

---

### GoogleDataplexDatascanDataProfileSpecExcludeFields <a name="GoogleDataplexDatascanDataProfileSpecExcludeFields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataProfileSpecExcludeFields {
    string[] FieldNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields.property.fieldNames">FieldNames</a></code> | <code>string[]</code> | Expected input is a list of fully qualified names of fields as in the schema. |

---

##### `FieldNames`<sup>Optional</sup> <a name="FieldNames" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields.property.fieldNames"></a>

```csharp
public string[] FieldNames { get; set; }
```

- *Type:* string[]

Expected input is a list of fully qualified names of fields as in the schema.

Only top-level field names for nested fields are supported.
For instance, if 'x' is of nested field type, listing 'x' is supported but 'x.y.z' is not supported. Here 'y' and 'y.z' are nested fields of 'x'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#field_names GoogleDataplexDatascan#field_names}

---

### GoogleDataplexDatascanDataProfileSpecIncludeFields <a name="GoogleDataplexDatascanDataProfileSpecIncludeFields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataProfileSpecIncludeFields {
    string[] FieldNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields.property.fieldNames">FieldNames</a></code> | <code>string[]</code> | Expected input is a list of fully qualified names of fields as in the schema. |

---

##### `FieldNames`<sup>Optional</sup> <a name="FieldNames" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields.property.fieldNames"></a>

```csharp
public string[] FieldNames { get; set; }
```

- *Type:* string[]

Expected input is a list of fully qualified names of fields as in the schema.

Only top-level field names for nested fields are supported.
For instance, if 'x' is of nested field type, listing 'x' is supported but 'x.y.z' is not supported. Here 'y' and 'y.z' are nested fields of 'x'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#field_names GoogleDataplexDatascan#field_names}

---

### GoogleDataplexDatascanDataProfileSpecPostScanActions <a name="GoogleDataplexDatascanDataProfileSpecPostScanActions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataProfileSpecPostScanActions {
    GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport BigqueryExport = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions.property.bigqueryExport">BigqueryExport</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a></code> | bigquery_export block. |

---

##### `BigqueryExport`<sup>Optional</sup> <a name="BigqueryExport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions.property.bigqueryExport"></a>

```csharp
public GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport BigqueryExport { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a>

bigquery_export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#bigquery_export GoogleDataplexDatascan#bigquery_export}

---

### GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport <a name="GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport {
    string ResultsTable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport.property.resultsTable">ResultsTable</a></code> | <code>string</code> | The BigQuery table to export DataProfileScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID. |

---

##### `ResultsTable`<sup>Optional</sup> <a name="ResultsTable" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport.property.resultsTable"></a>

```csharp
public string ResultsTable { get; set; }
```

- *Type:* string

The BigQuery table to export DataProfileScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#results_table GoogleDataplexDatascan#results_table}

---

### GoogleDataplexDatascanDataQualitySpec <a name="GoogleDataplexDatascanDataQualitySpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpec {
    GoogleDataplexDatascanDataQualitySpecPostScanActions PostScanActions = null,
    string RowFilter = null,
    object Rules = null,
    double SamplingPercent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.postScanActions">PostScanActions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions">GoogleDataplexDatascanDataQualitySpecPostScanActions</a></code> | post_scan_actions block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.rowFilter">RowFilter</a></code> | <code>string</code> | A filter applied to all rows in a single DataScan job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.rules">Rules</a></code> | <code>object</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.samplingPercent">SamplingPercent</a></code> | <code>double</code> | The percentage of the records to be selected from the dataset for DataScan. |

---

##### `PostScanActions`<sup>Optional</sup> <a name="PostScanActions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.postScanActions"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecPostScanActions PostScanActions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions">GoogleDataplexDatascanDataQualitySpecPostScanActions</a>

post_scan_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#post_scan_actions GoogleDataplexDatascan#post_scan_actions}

---

##### `RowFilter`<sup>Optional</sup> <a name="RowFilter" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.rowFilter"></a>

```csharp
public string RowFilter { get; set; }
```

- *Type:* string

A filter applied to all rows in a single DataScan job.

The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#row_filter GoogleDataplexDatascan#row_filter}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#rules GoogleDataplexDatascan#rules}

---

##### `SamplingPercent`<sup>Optional</sup> <a name="SamplingPercent" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.samplingPercent"></a>

```csharp
public double SamplingPercent { get; set; }
```

- *Type:* double

The percentage of the records to be selected from the dataset for DataScan.

Value can range between 0.0 and 100.0 with up to 3 significant decimal digits.
Sampling is not applied if 'sampling_percent' is not specified, 0 or 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#sampling_percent GoogleDataplexDatascan#sampling_percent}

---

### GoogleDataplexDatascanDataQualitySpecPostScanActions <a name="GoogleDataplexDatascanDataQualitySpecPostScanActions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecPostScanActions {
    GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport BigqueryExport = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions.property.bigqueryExport">BigqueryExport</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a></code> | bigquery_export block. |

---

##### `BigqueryExport`<sup>Optional</sup> <a name="BigqueryExport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions.property.bigqueryExport"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport BigqueryExport { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a>

bigquery_export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#bigquery_export GoogleDataplexDatascan#bigquery_export}

---

### GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport <a name="GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport {
    string ResultsTable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport.property.resultsTable">ResultsTable</a></code> | <code>string</code> | The BigQuery table to export DataQualityScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID. |

---

##### `ResultsTable`<sup>Optional</sup> <a name="ResultsTable" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport.property.resultsTable"></a>

```csharp
public string ResultsTable { get; set; }
```

- *Type:* string

The BigQuery table to export DataQualityScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#results_table GoogleDataplexDatascan#results_table}

---

### GoogleDataplexDatascanDataQualitySpecRules <a name="GoogleDataplexDatascanDataQualitySpecRules" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecRules {
    string Dimension,
    string Column = null,
    string Description = null,
    object IgnoreNull = null,
    string Name = null,
    GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation NonNullExpectation = null,
    GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation RangeExpectation = null,
    GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation RegexExpectation = null,
    GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation RowConditionExpectation = null,
    GoogleDataplexDatascanDataQualitySpecRulesSetExpectation SetExpectation = null,
    GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion SqlAssertion = null,
    GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation StatisticRangeExpectation = null,
    GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation TableConditionExpectation = null,
    double Threshold = null,
    GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation UniquenessExpectation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.dimension">Dimension</a></code> | <code>string</code> | The dimension a rule belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.column">Column</a></code> | <code>string</code> | The unnested column which this rule is evaluated against. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.description">Description</a></code> | <code>string</code> | Description of the rule. The maximum length is 1,024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.ignoreNull">IgnoreNull</a></code> | <code>object</code> | Rows with null values will automatically fail a rule, unless ignoreNull is true. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.name">Name</a></code> | <code>string</code> | A mutable name for the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.nonNullExpectation">NonNullExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation</a></code> | non_null_expectation block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.rangeExpectation">RangeExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation</a></code> | range_expectation block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.regexExpectation">RegexExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation</a></code> | regex_expectation block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.rowConditionExpectation">RowConditionExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation</a></code> | row_condition_expectation block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.setExpectation">SetExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation">GoogleDataplexDatascanDataQualitySpecRulesSetExpectation</a></code> | set_expectation block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.sqlAssertion">SqlAssertion</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion</a></code> | sql_assertion block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.statisticRangeExpectation">StatisticRangeExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a></code> | statistic_range_expectation block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.tableConditionExpectation">TableConditionExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation</a></code> | table_condition_expectation block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.threshold">Threshold</a></code> | <code>double</code> | The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of [0.0, 1.0]. 0 indicates default value (i.e. 1.0). |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.uniquenessExpectation">UniquenessExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation</a></code> | uniqueness_expectation block. |

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.dimension"></a>

```csharp
public string Dimension { get; set; }
```

- *Type:* string

The dimension a rule belongs to.

Results are also aggregated at the dimension level. Supported dimensions are ["COMPLETENESS", "ACCURACY", "CONSISTENCY", "VALIDITY", "UNIQUENESS", "INTEGRITY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#dimension GoogleDataplexDatascan#dimension}

---

##### `Column`<sup>Optional</sup> <a name="Column" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.column"></a>

```csharp
public string Column { get; set; }
```

- *Type:* string

The unnested column which this rule is evaluated against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#column GoogleDataplexDatascan#column}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the rule. The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#description GoogleDataplexDatascan#description}

---

##### `IgnoreNull`<sup>Optional</sup> <a name="IgnoreNull" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.ignoreNull"></a>

```csharp
public object IgnoreNull { get; set; }
```

- *Type:* object

Rows with null values will automatically fail a rule, unless ignoreNull is true.

In that case, such null rows are trivially considered passing. Only applicable to ColumnMap rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#ignore_null GoogleDataplexDatascan#ignore_null}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A mutable name for the rule.

The name must contain only letters (a-z, A-Z), numbers (0-9), or hyphens (-).
The maximum length is 63 characters.
Must start with a letter.
Must end with a number or a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#name GoogleDataplexDatascan#name}

---

##### `NonNullExpectation`<sup>Optional</sup> <a name="NonNullExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.nonNullExpectation"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation NonNullExpectation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation</a>

non_null_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#non_null_expectation GoogleDataplexDatascan#non_null_expectation}

---

##### `RangeExpectation`<sup>Optional</sup> <a name="RangeExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.rangeExpectation"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation RangeExpectation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation</a>

range_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#range_expectation GoogleDataplexDatascan#range_expectation}

---

##### `RegexExpectation`<sup>Optional</sup> <a name="RegexExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.regexExpectation"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation RegexExpectation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation</a>

regex_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#regex_expectation GoogleDataplexDatascan#regex_expectation}

---

##### `RowConditionExpectation`<sup>Optional</sup> <a name="RowConditionExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.rowConditionExpectation"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation RowConditionExpectation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation</a>

row_condition_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#row_condition_expectation GoogleDataplexDatascan#row_condition_expectation}

---

##### `SetExpectation`<sup>Optional</sup> <a name="SetExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.setExpectation"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesSetExpectation SetExpectation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation">GoogleDataplexDatascanDataQualitySpecRulesSetExpectation</a>

set_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#set_expectation GoogleDataplexDatascan#set_expectation}

---

##### `SqlAssertion`<sup>Optional</sup> <a name="SqlAssertion" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.sqlAssertion"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion SqlAssertion { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion</a>

sql_assertion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#sql_assertion GoogleDataplexDatascan#sql_assertion}

---

##### `StatisticRangeExpectation`<sup>Optional</sup> <a name="StatisticRangeExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.statisticRangeExpectation"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation StatisticRangeExpectation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a>

statistic_range_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#statistic_range_expectation GoogleDataplexDatascan#statistic_range_expectation}

---

##### `TableConditionExpectation`<sup>Optional</sup> <a name="TableConditionExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.tableConditionExpectation"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation TableConditionExpectation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation</a>

table_condition_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#table_condition_expectation GoogleDataplexDatascan#table_condition_expectation}

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of [0.0, 1.0]. 0 indicates default value (i.e. 1.0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#threshold GoogleDataplexDatascan#threshold}

---

##### `UniquenessExpectation`<sup>Optional</sup> <a name="UniquenessExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.uniquenessExpectation"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation UniquenessExpectation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation</a>

uniqueness_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#uniqueness_expectation GoogleDataplexDatascan#uniqueness_expectation}

---

### GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation {

};
```


### GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation {
    string MaxValue = null,
    string MinValue = null,
    object StrictMaxEnabled = null,
    object StrictMinEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.maxValue">MaxValue</a></code> | <code>string</code> | The maximum column value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.minValue">MinValue</a></code> | <code>string</code> | The minimum column value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMaxEnabled">StrictMaxEnabled</a></code> | <code>object</code> | Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMinEnabled">StrictMinEnabled</a></code> | <code>object</code> | Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed. |

---

##### `MaxValue`<sup>Optional</sup> <a name="MaxValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.maxValue"></a>

```csharp
public string MaxValue { get; set; }
```

- *Type:* string

The maximum column value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#max_value GoogleDataplexDatascan#max_value}

---

##### `MinValue`<sup>Optional</sup> <a name="MinValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.minValue"></a>

```csharp
public string MinValue { get; set; }
```

- *Type:* string

The minimum column value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#min_value GoogleDataplexDatascan#min_value}

---

##### `StrictMaxEnabled`<sup>Optional</sup> <a name="StrictMaxEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMaxEnabled"></a>

```csharp
public object StrictMaxEnabled { get; set; }
```

- *Type:* object

Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed.

Only relevant if a maxValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#strict_max_enabled GoogleDataplexDatascan#strict_max_enabled}

---

##### `StrictMinEnabled`<sup>Optional</sup> <a name="StrictMinEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMinEnabled"></a>

```csharp
public object StrictMinEnabled { get; set; }
```

- *Type:* object

Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed.

Only relevant if a minValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#strict_min_enabled GoogleDataplexDatascan#strict_min_enabled}

---

### GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation {
    string Regex
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation.property.regex">Regex</a></code> | <code>string</code> | A regular expression the column value is expected to match. |

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation.property.regex"></a>

```csharp
public string Regex { get; set; }
```

- *Type:* string

A regular expression the column value is expected to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#regex GoogleDataplexDatascan#regex}

---

### GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation {
    string SqlExpression
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation.property.sqlExpression">SqlExpression</a></code> | <code>string</code> | The SQL expression. |

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation.property.sqlExpression"></a>

```csharp
public string SqlExpression { get; set; }
```

- *Type:* string

The SQL expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#sql_expression GoogleDataplexDatascan#sql_expression}

---

### GoogleDataplexDatascanDataQualitySpecRulesSetExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesSetExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecRulesSetExpectation {
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation.property.values">Values</a></code> | <code>string[]</code> | Expected values for the column value. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Expected values for the column value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#values GoogleDataplexDatascan#values}

---

### GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion <a name="GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion {
    string SqlStatement
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion.property.sqlStatement">SqlStatement</a></code> | <code>string</code> | The SQL statement. |

---

##### `SqlStatement`<sup>Required</sup> <a name="SqlStatement" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion.property.sqlStatement"></a>

```csharp
public string SqlStatement { get; set; }
```

- *Type:* string

The SQL statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#sql_statement GoogleDataplexDatascan#sql_statement}

---

### GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation {
    string Statistic,
    string MaxValue = null,
    string MinValue = null,
    object StrictMaxEnabled = null,
    object StrictMinEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.statistic">Statistic</a></code> | <code>string</code> | column statistics. Possible values: ["STATISTIC_UNDEFINED", "MEAN", "MIN", "MAX"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.maxValue">MaxValue</a></code> | <code>string</code> | The maximum column statistic value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.minValue">MinValue</a></code> | <code>string</code> | The minimum column statistic value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMaxEnabled">StrictMaxEnabled</a></code> | <code>object</code> | Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMinEnabled">StrictMinEnabled</a></code> | <code>object</code> | Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed. |

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.statistic"></a>

```csharp
public string Statistic { get; set; }
```

- *Type:* string

column statistics. Possible values: ["STATISTIC_UNDEFINED", "MEAN", "MIN", "MAX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#statistic GoogleDataplexDatascan#statistic}

---

##### `MaxValue`<sup>Optional</sup> <a name="MaxValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.maxValue"></a>

```csharp
public string MaxValue { get; set; }
```

- *Type:* string

The maximum column statistic value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#max_value GoogleDataplexDatascan#max_value}

---

##### `MinValue`<sup>Optional</sup> <a name="MinValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.minValue"></a>

```csharp
public string MinValue { get; set; }
```

- *Type:* string

The minimum column statistic value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#min_value GoogleDataplexDatascan#min_value}

---

##### `StrictMaxEnabled`<sup>Optional</sup> <a name="StrictMaxEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMaxEnabled"></a>

```csharp
public object StrictMaxEnabled { get; set; }
```

- *Type:* object

Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.

Only relevant if a maxValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#strict_max_enabled GoogleDataplexDatascan#strict_max_enabled}

---

##### `StrictMinEnabled`<sup>Optional</sup> <a name="StrictMinEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMinEnabled"></a>

```csharp
public object StrictMinEnabled { get; set; }
```

- *Type:* object

Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.

Only relevant if a minValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#strict_min_enabled GoogleDataplexDatascan#strict_min_enabled}

---

### GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation {
    string SqlExpression
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation.property.sqlExpression">SqlExpression</a></code> | <code>string</code> | The SQL expression. |

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation.property.sqlExpression"></a>

```csharp
public string SqlExpression { get; set; }
```

- *Type:* string

The SQL expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#sql_expression GoogleDataplexDatascan#sql_expression}

---

### GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation {

};
```


### GoogleDataplexDatascanExecutionSpec <a name="GoogleDataplexDatascanExecutionSpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanExecutionSpec {
    GoogleDataplexDatascanExecutionSpecTrigger Trigger,
    string Field = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger">GoogleDataplexDatascanExecutionSpecTrigger</a></code> | trigger block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec.property.field">Field</a></code> | <code>string</code> | The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time. |

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec.property.trigger"></a>

```csharp
public GoogleDataplexDatascanExecutionSpecTrigger Trigger { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger">GoogleDataplexDatascanExecutionSpecTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#trigger GoogleDataplexDatascan#trigger}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time.

If not specified, a data scan will run for all data in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#field GoogleDataplexDatascan#field}

---

### GoogleDataplexDatascanExecutionSpecTrigger <a name="GoogleDataplexDatascanExecutionSpecTrigger" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanExecutionSpecTrigger {
    GoogleDataplexDatascanExecutionSpecTriggerOnDemand OnDemand = null,
    GoogleDataplexDatascanExecutionSpecTriggerSchedule Schedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger.property.onDemand">OnDemand</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand">GoogleDataplexDatascanExecutionSpecTriggerOnDemand</a></code> | on_demand block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule">GoogleDataplexDatascanExecutionSpecTriggerSchedule</a></code> | schedule block. |

---

##### `OnDemand`<sup>Optional</sup> <a name="OnDemand" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger.property.onDemand"></a>

```csharp
public GoogleDataplexDatascanExecutionSpecTriggerOnDemand OnDemand { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand">GoogleDataplexDatascanExecutionSpecTriggerOnDemand</a>

on_demand block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#on_demand GoogleDataplexDatascan#on_demand}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger.property.schedule"></a>

```csharp
public GoogleDataplexDatascanExecutionSpecTriggerSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule">GoogleDataplexDatascanExecutionSpecTriggerSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#schedule GoogleDataplexDatascan#schedule}

---

### GoogleDataplexDatascanExecutionSpecTriggerOnDemand <a name="GoogleDataplexDatascanExecutionSpecTriggerOnDemand" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanExecutionSpecTriggerOnDemand {

};
```


### GoogleDataplexDatascanExecutionSpecTriggerSchedule <a name="GoogleDataplexDatascanExecutionSpecTriggerSchedule" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanExecutionSpecTriggerSchedule {
    string Cron
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule.property.cron">Cron</a></code> | <code>string</code> | Cron schedule for running scans periodically. This field is required for Schedule scans. |

---

##### `Cron`<sup>Required</sup> <a name="Cron" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule.property.cron"></a>

```csharp
public string Cron { get; set; }
```

- *Type:* string

Cron schedule for running scans periodically. This field is required for Schedule scans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#cron GoogleDataplexDatascan#cron}

---

### GoogleDataplexDatascanExecutionStatus <a name="GoogleDataplexDatascanExecutionStatus" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanExecutionStatus {

};
```


### GoogleDataplexDatascanTimeouts <a name="GoogleDataplexDatascanTimeouts" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#create GoogleDataplexDatascan#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#delete GoogleDataplexDatascan#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#update GoogleDataplexDatascan#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#create GoogleDataplexDatascan#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#delete GoogleDataplexDatascan#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_datascan#update GoogleDataplexDatascan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexDatascanDataOutputReference <a name="GoogleDataplexDatascanDataOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.resetEntity">ResetEntity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntity` <a name="ResetEntity" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.resetEntity"></a>

```csharp
private void ResetEntity()
```

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.resetResource"></a>

```csharp
private void ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.entityInput">EntityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.entity">Entity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData">GoogleDataplexDatascanData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntityInput`<sup>Optional</sup> <a name="EntityInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.entityInput"></a>

```csharp
public string EntityInput { get; }
```

- *Type:* string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `Entity`<sup>Required</sup> <a name="Entity" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.entity"></a>

```csharp
public string Entity { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexDatascanData InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData">GoogleDataplexDatascanData</a>

---


### GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference <a name="GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resetFieldNames">ResetFieldNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFieldNames` <a name="ResetFieldNames" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resetFieldNames"></a>

```csharp
private void ResetFieldNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fieldNamesInput">FieldNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fieldNames">FieldNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields">GoogleDataplexDatascanDataProfileSpecExcludeFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldNamesInput`<sup>Optional</sup> <a name="FieldNamesInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fieldNamesInput"></a>

```csharp
public string[] FieldNamesInput { get; }
```

- *Type:* string[]

---

##### `FieldNames`<sup>Required</sup> <a name="FieldNames" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fieldNames"></a>

```csharp
public string[] FieldNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexDatascanDataProfileSpecExcludeFields InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields">GoogleDataplexDatascanDataProfileSpecExcludeFields</a>

---


### GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference <a name="GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resetFieldNames">ResetFieldNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFieldNames` <a name="ResetFieldNames" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resetFieldNames"></a>

```csharp
private void ResetFieldNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fieldNamesInput">FieldNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fieldNames">FieldNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields">GoogleDataplexDatascanDataProfileSpecIncludeFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldNamesInput`<sup>Optional</sup> <a name="FieldNamesInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fieldNamesInput"></a>

```csharp
public string[] FieldNamesInput { get; }
```

- *Type:* string[]

---

##### `FieldNames`<sup>Required</sup> <a name="FieldNames" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fieldNames"></a>

```csharp
public string[] FieldNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexDatascanDataProfileSpecIncludeFields InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields">GoogleDataplexDatascanDataProfileSpecIncludeFields</a>

---


### GoogleDataplexDatascanDataProfileSpecOutputReference <a name="GoogleDataplexDatascanDataProfileSpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataProfileSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putExcludeFields">PutExcludeFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putIncludeFields">PutIncludeFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putPostScanActions">PutPostScanActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetExcludeFields">ResetExcludeFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetIncludeFields">ResetIncludeFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetPostScanActions">ResetPostScanActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetRowFilter">ResetRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetSamplingPercent">ResetSamplingPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExcludeFields` <a name="PutExcludeFields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putExcludeFields"></a>

```csharp
private void PutExcludeFields(GoogleDataplexDatascanDataProfileSpecExcludeFields Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putExcludeFields.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields">GoogleDataplexDatascanDataProfileSpecExcludeFields</a>

---

##### `PutIncludeFields` <a name="PutIncludeFields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putIncludeFields"></a>

```csharp
private void PutIncludeFields(GoogleDataplexDatascanDataProfileSpecIncludeFields Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putIncludeFields.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields">GoogleDataplexDatascanDataProfileSpecIncludeFields</a>

---

##### `PutPostScanActions` <a name="PutPostScanActions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putPostScanActions"></a>

```csharp
private void PutPostScanActions(GoogleDataplexDatascanDataProfileSpecPostScanActions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putPostScanActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions">GoogleDataplexDatascanDataProfileSpecPostScanActions</a>

---

##### `ResetExcludeFields` <a name="ResetExcludeFields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetExcludeFields"></a>

```csharp
private void ResetExcludeFields()
```

##### `ResetIncludeFields` <a name="ResetIncludeFields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetIncludeFields"></a>

```csharp
private void ResetIncludeFields()
```

##### `ResetPostScanActions` <a name="ResetPostScanActions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetPostScanActions"></a>

```csharp
private void ResetPostScanActions()
```

##### `ResetRowFilter` <a name="ResetRowFilter" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetRowFilter"></a>

```csharp
private void ResetRowFilter()
```

##### `ResetSamplingPercent` <a name="ResetSamplingPercent" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetSamplingPercent"></a>

```csharp
private void ResetSamplingPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.excludeFields">ExcludeFields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference">GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.includeFields">IncludeFields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference">GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.postScanActions">PostScanActions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference">GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.excludeFieldsInput">ExcludeFieldsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields">GoogleDataplexDatascanDataProfileSpecExcludeFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.includeFieldsInput">IncludeFieldsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields">GoogleDataplexDatascanDataProfileSpecIncludeFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.postScanActionsInput">PostScanActionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions">GoogleDataplexDatascanDataProfileSpecPostScanActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.rowFilterInput">RowFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.samplingPercentInput">SamplingPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.rowFilter">RowFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.samplingPercent">SamplingPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec">GoogleDataplexDatascanDataProfileSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludeFields`<sup>Required</sup> <a name="ExcludeFields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.excludeFields"></a>

```csharp
public GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference ExcludeFields { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference">GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference</a>

---

##### `IncludeFields`<sup>Required</sup> <a name="IncludeFields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.includeFields"></a>

```csharp
public GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference IncludeFields { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference">GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference</a>

---

##### `PostScanActions`<sup>Required</sup> <a name="PostScanActions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.postScanActions"></a>

```csharp
public GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference PostScanActions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference">GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference</a>

---

##### `ExcludeFieldsInput`<sup>Optional</sup> <a name="ExcludeFieldsInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.excludeFieldsInput"></a>

```csharp
public GoogleDataplexDatascanDataProfileSpecExcludeFields ExcludeFieldsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields">GoogleDataplexDatascanDataProfileSpecExcludeFields</a>

---

##### `IncludeFieldsInput`<sup>Optional</sup> <a name="IncludeFieldsInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.includeFieldsInput"></a>

```csharp
public GoogleDataplexDatascanDataProfileSpecIncludeFields IncludeFieldsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields">GoogleDataplexDatascanDataProfileSpecIncludeFields</a>

---

##### `PostScanActionsInput`<sup>Optional</sup> <a name="PostScanActionsInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.postScanActionsInput"></a>

```csharp
public GoogleDataplexDatascanDataProfileSpecPostScanActions PostScanActionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions">GoogleDataplexDatascanDataProfileSpecPostScanActions</a>

---

##### `RowFilterInput`<sup>Optional</sup> <a name="RowFilterInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.rowFilterInput"></a>

```csharp
public string RowFilterInput { get; }
```

- *Type:* string

---

##### `SamplingPercentInput`<sup>Optional</sup> <a name="SamplingPercentInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.samplingPercentInput"></a>

```csharp
public double SamplingPercentInput { get; }
```

- *Type:* double

---

##### `RowFilter`<sup>Required</sup> <a name="RowFilter" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.rowFilter"></a>

```csharp
public string RowFilter { get; }
```

- *Type:* string

---

##### `SamplingPercent`<sup>Required</sup> <a name="SamplingPercent" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.samplingPercent"></a>

```csharp
public double SamplingPercent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexDatascanDataProfileSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec">GoogleDataplexDatascanDataProfileSpec</a>

---


### GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference <a name="GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resetResultsTable">ResetResultsTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResultsTable` <a name="ResetResultsTable" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resetResultsTable"></a>

```csharp
private void ResetResultsTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.resultsTableInput">ResultsTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.resultsTable">ResultsTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResultsTableInput`<sup>Optional</sup> <a name="ResultsTableInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.resultsTableInput"></a>

```csharp
public string ResultsTableInput { get; }
```

- *Type:* string

---

##### `ResultsTable`<sup>Required</sup> <a name="ResultsTable" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.resultsTable"></a>

```csharp
public string ResultsTable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a>

---


### GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference <a name="GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.putBigqueryExport">PutBigqueryExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.resetBigqueryExport">ResetBigqueryExport</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBigqueryExport` <a name="PutBigqueryExport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.putBigqueryExport"></a>

```csharp
private void PutBigqueryExport(GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.putBigqueryExport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a>

---

##### `ResetBigqueryExport` <a name="ResetBigqueryExport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.resetBigqueryExport"></a>

```csharp
private void ResetBigqueryExport()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.bigqueryExport">BigqueryExport</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.bigqueryExportInput">BigqueryExportInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions">GoogleDataplexDatascanDataProfileSpecPostScanActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BigqueryExport`<sup>Required</sup> <a name="BigqueryExport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.bigqueryExport"></a>

```csharp
public GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference BigqueryExport { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference</a>

---

##### `BigqueryExportInput`<sup>Optional</sup> <a name="BigqueryExportInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.bigqueryExportInput"></a>

```csharp
public GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport BigqueryExportInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexDatascanDataProfileSpecPostScanActions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions">GoogleDataplexDatascanDataProfileSpecPostScanActions</a>

---


### GoogleDataplexDatascanDataQualitySpecOutputReference <a name="GoogleDataplexDatascanDataQualitySpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.putPostScanActions">PutPostScanActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetPostScanActions">ResetPostScanActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetRowFilter">ResetRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetSamplingPercent">ResetSamplingPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPostScanActions` <a name="PutPostScanActions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.putPostScanActions"></a>

```csharp
private void PutPostScanActions(GoogleDataplexDatascanDataQualitySpecPostScanActions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.putPostScanActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions">GoogleDataplexDatascanDataQualitySpecPostScanActions</a>

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.putRules.parameter.value"></a>

- *Type:* object

---

##### `ResetPostScanActions` <a name="ResetPostScanActions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetPostScanActions"></a>

```csharp
private void ResetPostScanActions()
```

##### `ResetRowFilter` <a name="ResetRowFilter" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetRowFilter"></a>

```csharp
private void ResetRowFilter()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetRules"></a>

```csharp
private void ResetRules()
```

##### `ResetSamplingPercent` <a name="ResetSamplingPercent" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetSamplingPercent"></a>

```csharp
private void ResetSamplingPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.postScanActions">PostScanActions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference">GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList">GoogleDataplexDatascanDataQualitySpecRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.postScanActionsInput">PostScanActionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions">GoogleDataplexDatascanDataQualitySpecPostScanActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rowFilterInput">RowFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.samplingPercentInput">SamplingPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rowFilter">RowFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.samplingPercent">SamplingPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec">GoogleDataplexDatascanDataQualitySpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PostScanActions`<sup>Required</sup> <a name="PostScanActions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.postScanActions"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference PostScanActions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference">GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rules"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList">GoogleDataplexDatascanDataQualitySpecRulesList</a>

---

##### `PostScanActionsInput`<sup>Optional</sup> <a name="PostScanActionsInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.postScanActionsInput"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecPostScanActions PostScanActionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions">GoogleDataplexDatascanDataQualitySpecPostScanActions</a>

---

##### `RowFilterInput`<sup>Optional</sup> <a name="RowFilterInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rowFilterInput"></a>

```csharp
public string RowFilterInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `SamplingPercentInput`<sup>Optional</sup> <a name="SamplingPercentInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.samplingPercentInput"></a>

```csharp
public double SamplingPercentInput { get; }
```

- *Type:* double

---

##### `RowFilter`<sup>Required</sup> <a name="RowFilter" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rowFilter"></a>

```csharp
public string RowFilter { get; }
```

- *Type:* string

---

##### `SamplingPercent`<sup>Required</sup> <a name="SamplingPercent" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.samplingPercent"></a>

```csharp
public double SamplingPercent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec">GoogleDataplexDatascanDataQualitySpec</a>

---


### GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference <a name="GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resetResultsTable">ResetResultsTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResultsTable` <a name="ResetResultsTable" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resetResultsTable"></a>

```csharp
private void ResetResultsTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.resultsTableInput">ResultsTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.resultsTable">ResultsTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResultsTableInput`<sup>Optional</sup> <a name="ResultsTableInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.resultsTableInput"></a>

```csharp
public string ResultsTableInput { get; }
```

- *Type:* string

---

##### `ResultsTable`<sup>Required</sup> <a name="ResultsTable" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.resultsTable"></a>

```csharp
public string ResultsTable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a>

---


### GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference <a name="GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.putBigqueryExport">PutBigqueryExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.resetBigqueryExport">ResetBigqueryExport</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBigqueryExport` <a name="PutBigqueryExport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.putBigqueryExport"></a>

```csharp
private void PutBigqueryExport(GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.putBigqueryExport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a>

---

##### `ResetBigqueryExport` <a name="ResetBigqueryExport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.resetBigqueryExport"></a>

```csharp
private void ResetBigqueryExport()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.bigqueryExport">BigqueryExport</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.bigqueryExportInput">BigqueryExportInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions">GoogleDataplexDatascanDataQualitySpecPostScanActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BigqueryExport`<sup>Required</sup> <a name="BigqueryExport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.bigqueryExport"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference BigqueryExport { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference</a>

---

##### `BigqueryExportInput`<sup>Optional</sup> <a name="BigqueryExportInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.bigqueryExportInput"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport BigqueryExportInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecPostScanActions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions">GoogleDataplexDatascanDataQualitySpecPostScanActions</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesList <a name="GoogleDataplexDatascanDataQualitySpecRulesList" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.get"></a>

```csharp
private GoogleDataplexDatascanDataQualitySpecRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putNonNullExpectation">PutNonNullExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation">PutRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRegexExpectation">PutRegexExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRowConditionExpectation">PutRowConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putSetExpectation">PutSetExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putSqlAssertion">PutSqlAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation">PutStatisticRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putTableConditionExpectation">PutTableConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putUniquenessExpectation">PutUniquenessExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetColumn">ResetColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetIgnoreNull">ResetIgnoreNull</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetNonNullExpectation">ResetNonNullExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetRangeExpectation">ResetRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetRegexExpectation">ResetRegexExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetRowConditionExpectation">ResetRowConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetSetExpectation">ResetSetExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetSqlAssertion">ResetSqlAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetStatisticRangeExpectation">ResetStatisticRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetTableConditionExpectation">ResetTableConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetUniquenessExpectation">ResetUniquenessExpectation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNonNullExpectation` <a name="PutNonNullExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putNonNullExpectation"></a>

```csharp
private void PutNonNullExpectation(GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putNonNullExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation</a>

---

##### `PutRangeExpectation` <a name="PutRangeExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation"></a>

```csharp
private void PutRangeExpectation(GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation</a>

---

##### `PutRegexExpectation` <a name="PutRegexExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRegexExpectation"></a>

```csharp
private void PutRegexExpectation(GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRegexExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation</a>

---

##### `PutRowConditionExpectation` <a name="PutRowConditionExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRowConditionExpectation"></a>

```csharp
private void PutRowConditionExpectation(GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRowConditionExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation</a>

---

##### `PutSetExpectation` <a name="PutSetExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putSetExpectation"></a>

```csharp
private void PutSetExpectation(GoogleDataplexDatascanDataQualitySpecRulesSetExpectation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putSetExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation">GoogleDataplexDatascanDataQualitySpecRulesSetExpectation</a>

---

##### `PutSqlAssertion` <a name="PutSqlAssertion" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putSqlAssertion"></a>

```csharp
private void PutSqlAssertion(GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putSqlAssertion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion</a>

---

##### `PutStatisticRangeExpectation` <a name="PutStatisticRangeExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation"></a>

```csharp
private void PutStatisticRangeExpectation(GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a>

---

##### `PutTableConditionExpectation` <a name="PutTableConditionExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putTableConditionExpectation"></a>

```csharp
private void PutTableConditionExpectation(GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putTableConditionExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation</a>

---

##### `PutUniquenessExpectation` <a name="PutUniquenessExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putUniquenessExpectation"></a>

```csharp
private void PutUniquenessExpectation(GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putUniquenessExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation</a>

---

##### `ResetColumn` <a name="ResetColumn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetColumn"></a>

```csharp
private void ResetColumn()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetIgnoreNull` <a name="ResetIgnoreNull" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetIgnoreNull"></a>

```csharp
private void ResetIgnoreNull()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNonNullExpectation` <a name="ResetNonNullExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetNonNullExpectation"></a>

```csharp
private void ResetNonNullExpectation()
```

##### `ResetRangeExpectation` <a name="ResetRangeExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetRangeExpectation"></a>

```csharp
private void ResetRangeExpectation()
```

##### `ResetRegexExpectation` <a name="ResetRegexExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetRegexExpectation"></a>

```csharp
private void ResetRegexExpectation()
```

##### `ResetRowConditionExpectation` <a name="ResetRowConditionExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetRowConditionExpectation"></a>

```csharp
private void ResetRowConditionExpectation()
```

##### `ResetSetExpectation` <a name="ResetSetExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetSetExpectation"></a>

```csharp
private void ResetSetExpectation()
```

##### `ResetSqlAssertion` <a name="ResetSqlAssertion" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetSqlAssertion"></a>

```csharp
private void ResetSqlAssertion()
```

##### `ResetStatisticRangeExpectation` <a name="ResetStatisticRangeExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetStatisticRangeExpectation"></a>

```csharp
private void ResetStatisticRangeExpectation()
```

##### `ResetTableConditionExpectation` <a name="ResetTableConditionExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetTableConditionExpectation"></a>

```csharp
private void ResetTableConditionExpectation()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetThreshold"></a>

```csharp
private void ResetThreshold()
```

##### `ResetUniquenessExpectation` <a name="ResetUniquenessExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetUniquenessExpectation"></a>

```csharp
private void ResetUniquenessExpectation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectation">NonNullExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectation">RangeExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectation">RegexExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectation">RowConditionExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectation">SetExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.sqlAssertion">SqlAssertion</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectation">StatisticRangeExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectation">TableConditionExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectation">UniquenessExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.columnInput">ColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.dimensionInput">DimensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNullInput">IgnoreNullInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectationInput">NonNullExpectationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectationInput">RangeExpectationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectationInput">RegexExpectationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectationInput">RowConditionExpectationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectationInput">SetExpectationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation">GoogleDataplexDatascanDataQualitySpecRulesSetExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.sqlAssertionInput">SqlAssertionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectationInput">StatisticRangeExpectationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectationInput">TableConditionExpectationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectationInput">UniquenessExpectationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.column">Column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.dimension">Dimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNull">IgnoreNull</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NonNullExpectation`<sup>Required</sup> <a name="NonNullExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectation"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference NonNullExpectation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference</a>

---

##### `RangeExpectation`<sup>Required</sup> <a name="RangeExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectation"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference RangeExpectation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference</a>

---

##### `RegexExpectation`<sup>Required</sup> <a name="RegexExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectation"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference RegexExpectation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference</a>

---

##### `RowConditionExpectation`<sup>Required</sup> <a name="RowConditionExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectation"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference RowConditionExpectation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference</a>

---

##### `SetExpectation`<sup>Required</sup> <a name="SetExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectation"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference SetExpectation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference</a>

---

##### `SqlAssertion`<sup>Required</sup> <a name="SqlAssertion" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.sqlAssertion"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference SqlAssertion { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference</a>

---

##### `StatisticRangeExpectation`<sup>Required</sup> <a name="StatisticRangeExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectation"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference StatisticRangeExpectation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference</a>

---

##### `TableConditionExpectation`<sup>Required</sup> <a name="TableConditionExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectation"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference TableConditionExpectation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference</a>

---

##### `UniquenessExpectation`<sup>Required</sup> <a name="UniquenessExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectation"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference UniquenessExpectation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.columnInput"></a>

```csharp
public string ColumnInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.dimensionInput"></a>

```csharp
public string DimensionInput { get; }
```

- *Type:* string

---

##### `IgnoreNullInput`<sup>Optional</sup> <a name="IgnoreNullInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNullInput"></a>

```csharp
public object IgnoreNullInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NonNullExpectationInput`<sup>Optional</sup> <a name="NonNullExpectationInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectationInput"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation NonNullExpectationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation</a>

---

##### `RangeExpectationInput`<sup>Optional</sup> <a name="RangeExpectationInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectationInput"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation RangeExpectationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation</a>

---

##### `RegexExpectationInput`<sup>Optional</sup> <a name="RegexExpectationInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectationInput"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation RegexExpectationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation</a>

---

##### `RowConditionExpectationInput`<sup>Optional</sup> <a name="RowConditionExpectationInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectationInput"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation RowConditionExpectationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation</a>

---

##### `SetExpectationInput`<sup>Optional</sup> <a name="SetExpectationInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectationInput"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesSetExpectation SetExpectationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation">GoogleDataplexDatascanDataQualitySpecRulesSetExpectation</a>

---

##### `SqlAssertionInput`<sup>Optional</sup> <a name="SqlAssertionInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.sqlAssertionInput"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion SqlAssertionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion</a>

---

##### `StatisticRangeExpectationInput`<sup>Optional</sup> <a name="StatisticRangeExpectationInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectationInput"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation StatisticRangeExpectationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a>

---

##### `TableConditionExpectationInput`<sup>Optional</sup> <a name="TableConditionExpectationInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectationInput"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation TableConditionExpectationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation</a>

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `UniquenessExpectationInput`<sup>Optional</sup> <a name="UniquenessExpectationInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectationInput"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation UniquenessExpectationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation</a>

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.column"></a>

```csharp
public string Column { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.dimension"></a>

```csharp
public string Dimension { get; }
```

- *Type:* string

---

##### `IgnoreNull`<sup>Required</sup> <a name="IgnoreNull" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNull"></a>

```csharp
public object IgnoreNull { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMaxValue">ResetMaxValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMinValue">ResetMinValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMaxEnabled">ResetStrictMaxEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMinEnabled">ResetStrictMinEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxValue` <a name="ResetMaxValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMaxValue"></a>

```csharp
private void ResetMaxValue()
```

##### `ResetMinValue` <a name="ResetMinValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMinValue"></a>

```csharp
private void ResetMinValue()
```

##### `ResetStrictMaxEnabled` <a name="ResetStrictMaxEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMaxEnabled"></a>

```csharp
private void ResetStrictMaxEnabled()
```

##### `ResetStrictMinEnabled` <a name="ResetStrictMinEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMinEnabled"></a>

```csharp
private void ResetStrictMinEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValueInput">MaxValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValueInput">MinValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabledInput">StrictMaxEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabledInput">StrictMinEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValue">MaxValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValue">MinValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabled">StrictMaxEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabled">StrictMinEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxValueInput`<sup>Optional</sup> <a name="MaxValueInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValueInput"></a>

```csharp
public string MaxValueInput { get; }
```

- *Type:* string

---

##### `MinValueInput`<sup>Optional</sup> <a name="MinValueInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValueInput"></a>

```csharp
public string MinValueInput { get; }
```

- *Type:* string

---

##### `StrictMaxEnabledInput`<sup>Optional</sup> <a name="StrictMaxEnabledInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabledInput"></a>

```csharp
public object StrictMaxEnabledInput { get; }
```

- *Type:* object

---

##### `StrictMinEnabledInput`<sup>Optional</sup> <a name="StrictMinEnabledInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabledInput"></a>

```csharp
public object StrictMinEnabledInput { get; }
```

- *Type:* object

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValue"></a>

```csharp
public string MaxValue { get; }
```

- *Type:* string

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValue"></a>

```csharp
public string MinValue { get; }
```

- *Type:* string

---

##### `StrictMaxEnabled`<sup>Required</sup> <a name="StrictMaxEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabled"></a>

```csharp
public object StrictMaxEnabled { get; }
```

- *Type:* object

---

##### `StrictMinEnabled`<sup>Required</sup> <a name="StrictMinEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabled"></a>

```csharp
public object StrictMinEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regexInput">RegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regexInput"></a>

```csharp
public string RegexInput { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpressionInput">SqlExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpression">SqlExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SqlExpressionInput`<sup>Optional</sup> <a name="SqlExpressionInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpressionInput"></a>

```csharp
public string SqlExpressionInput { get; }
```

- *Type:* string

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpression"></a>

```csharp
public string SqlExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation">GoogleDataplexDatascanDataQualitySpecRulesSetExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesSetExpectation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation">GoogleDataplexDatascanDataQualitySpecRulesSetExpectation</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.sqlStatementInput">SqlStatementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.sqlStatement">SqlStatement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SqlStatementInput`<sup>Optional</sup> <a name="SqlStatementInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.sqlStatementInput"></a>

```csharp
public string SqlStatementInput { get; }
```

- *Type:* string

---

##### `SqlStatement`<sup>Required</sup> <a name="SqlStatement" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.sqlStatement"></a>

```csharp
public string SqlStatement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMaxValue">ResetMaxValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMinValue">ResetMinValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMaxEnabled">ResetStrictMaxEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMinEnabled">ResetStrictMinEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxValue` <a name="ResetMaxValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMaxValue"></a>

```csharp
private void ResetMaxValue()
```

##### `ResetMinValue` <a name="ResetMinValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMinValue"></a>

```csharp
private void ResetMinValue()
```

##### `ResetStrictMaxEnabled` <a name="ResetStrictMaxEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMaxEnabled"></a>

```csharp
private void ResetStrictMaxEnabled()
```

##### `ResetStrictMinEnabled` <a name="ResetStrictMinEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMinEnabled"></a>

```csharp
private void ResetStrictMinEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValueInput">MaxValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValueInput">MinValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statisticInput">StatisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabledInput">StrictMaxEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabledInput">StrictMinEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValue">MaxValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValue">MinValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statistic">Statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabled">StrictMaxEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabled">StrictMinEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxValueInput`<sup>Optional</sup> <a name="MaxValueInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValueInput"></a>

```csharp
public string MaxValueInput { get; }
```

- *Type:* string

---

##### `MinValueInput`<sup>Optional</sup> <a name="MinValueInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValueInput"></a>

```csharp
public string MinValueInput { get; }
```

- *Type:* string

---

##### `StatisticInput`<sup>Optional</sup> <a name="StatisticInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statisticInput"></a>

```csharp
public string StatisticInput { get; }
```

- *Type:* string

---

##### `StrictMaxEnabledInput`<sup>Optional</sup> <a name="StrictMaxEnabledInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabledInput"></a>

```csharp
public object StrictMaxEnabledInput { get; }
```

- *Type:* object

---

##### `StrictMinEnabledInput`<sup>Optional</sup> <a name="StrictMinEnabledInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabledInput"></a>

```csharp
public object StrictMinEnabledInput { get; }
```

- *Type:* object

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValue"></a>

```csharp
public string MaxValue { get; }
```

- *Type:* string

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValue"></a>

```csharp
public string MinValue { get; }
```

- *Type:* string

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statistic"></a>

```csharp
public string Statistic { get; }
```

- *Type:* string

---

##### `StrictMaxEnabled`<sup>Required</sup> <a name="StrictMaxEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabled"></a>

```csharp
public object StrictMaxEnabled { get; }
```

- *Type:* object

---

##### `StrictMinEnabled`<sup>Required</sup> <a name="StrictMinEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabled"></a>

```csharp
public object StrictMinEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpressionInput">SqlExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpression">SqlExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SqlExpressionInput`<sup>Optional</sup> <a name="SqlExpressionInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpressionInput"></a>

```csharp
public string SqlExpressionInput { get; }
```

- *Type:* string

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpression"></a>

```csharp
public string SqlExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation</a>

---


### GoogleDataplexDatascanExecutionSpecOutputReference <a name="GoogleDataplexDatascanExecutionSpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanExecutionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.putTrigger">PutTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.resetField">ResetField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTrigger` <a name="PutTrigger" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.putTrigger"></a>

```csharp
private void PutTrigger(GoogleDataplexDatascanExecutionSpecTrigger Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger">GoogleDataplexDatascanExecutionSpecTrigger</a>

---

##### `ResetField` <a name="ResetField" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.resetField"></a>

```csharp
private void ResetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference">GoogleDataplexDatascanExecutionSpecTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.triggerInput">TriggerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger">GoogleDataplexDatascanExecutionSpecTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec">GoogleDataplexDatascanExecutionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.trigger"></a>

```csharp
public GoogleDataplexDatascanExecutionSpecTriggerOutputReference Trigger { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference">GoogleDataplexDatascanExecutionSpecTriggerOutputReference</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `TriggerInput`<sup>Optional</sup> <a name="TriggerInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.triggerInput"></a>

```csharp
public GoogleDataplexDatascanExecutionSpecTrigger TriggerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger">GoogleDataplexDatascanExecutionSpecTrigger</a>

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexDatascanExecutionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec">GoogleDataplexDatascanExecutionSpec</a>

---


### GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference <a name="GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand">GoogleDataplexDatascanExecutionSpecTriggerOnDemand</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexDatascanExecutionSpecTriggerOnDemand InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand">GoogleDataplexDatascanExecutionSpecTriggerOnDemand</a>

---


### GoogleDataplexDatascanExecutionSpecTriggerOutputReference <a name="GoogleDataplexDatascanExecutionSpecTriggerOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanExecutionSpecTriggerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.putOnDemand">PutOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.resetOnDemand">ResetOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnDemand` <a name="PutOnDemand" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.putOnDemand"></a>

```csharp
private void PutOnDemand(GoogleDataplexDatascanExecutionSpecTriggerOnDemand Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.putOnDemand.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand">GoogleDataplexDatascanExecutionSpecTriggerOnDemand</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.putSchedule"></a>

```csharp
private void PutSchedule(GoogleDataplexDatascanExecutionSpecTriggerSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule">GoogleDataplexDatascanExecutionSpecTriggerSchedule</a>

---

##### `ResetOnDemand` <a name="ResetOnDemand" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.resetOnDemand"></a>

```csharp
private void ResetOnDemand()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.resetSchedule"></a>

```csharp
private void ResetSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.onDemand">OnDemand</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference">GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference">GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.onDemandInput">OnDemandInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand">GoogleDataplexDatascanExecutionSpecTriggerOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule">GoogleDataplexDatascanExecutionSpecTriggerSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger">GoogleDataplexDatascanExecutionSpecTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OnDemand`<sup>Required</sup> <a name="OnDemand" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.onDemand"></a>

```csharp
public GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference OnDemand { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference">GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.schedule"></a>

```csharp
public GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference">GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference</a>

---

##### `OnDemandInput`<sup>Optional</sup> <a name="OnDemandInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.onDemandInput"></a>

```csharp
public GoogleDataplexDatascanExecutionSpecTriggerOnDemand OnDemandInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand">GoogleDataplexDatascanExecutionSpecTriggerOnDemand</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.scheduleInput"></a>

```csharp
public GoogleDataplexDatascanExecutionSpecTriggerSchedule ScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule">GoogleDataplexDatascanExecutionSpecTriggerSchedule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexDatascanExecutionSpecTrigger InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger">GoogleDataplexDatascanExecutionSpecTrigger</a>

---


### GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference <a name="GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cronInput">CronInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cron">Cron</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule">GoogleDataplexDatascanExecutionSpecTriggerSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CronInput`<sup>Optional</sup> <a name="CronInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cronInput"></a>

```csharp
public string CronInput { get; }
```

- *Type:* string

---

##### `Cron`<sup>Required</sup> <a name="Cron" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cron"></a>

```csharp
public string Cron { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexDatascanExecutionSpecTriggerSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule">GoogleDataplexDatascanExecutionSpecTriggerSchedule</a>

---


### GoogleDataplexDatascanExecutionStatusList <a name="GoogleDataplexDatascanExecutionStatusList" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanExecutionStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.get"></a>

```csharp
private GoogleDataplexDatascanExecutionStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleDataplexDatascanExecutionStatusOutputReference <a name="GoogleDataplexDatascanExecutionStatusOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanExecutionStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.latestJobEndTime">LatestJobEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.latestJobStartTime">LatestJobStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatus">GoogleDataplexDatascanExecutionStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LatestJobEndTime`<sup>Required</sup> <a name="LatestJobEndTime" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.latestJobEndTime"></a>

```csharp
public string LatestJobEndTime { get; }
```

- *Type:* string

---

##### `LatestJobStartTime`<sup>Required</sup> <a name="LatestJobStartTime" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.latestJobStartTime"></a>

```csharp
public string LatestJobStartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexDatascanExecutionStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatus">GoogleDataplexDatascanExecutionStatus</a>

---


### GoogleDataplexDatascanTimeoutsOutputReference <a name="GoogleDataplexDatascanTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexDatascanTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



