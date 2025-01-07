# `googleNetworkConnectivityInternalRange` Submodule <a name="`googleNetworkConnectivityInternalRange` Submodule" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkConnectivityInternalRange <a name="GoogleNetworkConnectivityInternalRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range google_network_connectivity_internal_range}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityInternalRange(Construct Scope, string Id, GoogleNetworkConnectivityInternalRangeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig">GoogleNetworkConnectivityInternalRangeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig">GoogleNetworkConnectivityInternalRangeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putMigration">PutMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetIpCidrRange">ResetIpCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetMigration">ResetMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetOverlaps">ResetOverlaps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetPrefixLength">ResetPrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetTargetCidrRange">ResetTargetCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMigration` <a name="PutMigration" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putMigration"></a>

```csharp
private void PutMigration(GoogleNetworkConnectivityInternalRangeMigration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putMigration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkConnectivityInternalRangeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpCidrRange` <a name="ResetIpCidrRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetIpCidrRange"></a>

```csharp
private void ResetIpCidrRange()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMigration` <a name="ResetMigration" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetMigration"></a>

```csharp
private void ResetMigration()
```

##### `ResetOverlaps` <a name="ResetOverlaps" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetOverlaps"></a>

```csharp
private void ResetOverlaps()
```

##### `ResetPrefixLength` <a name="ResetPrefixLength" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetPrefixLength"></a>

```csharp
private void ResetPrefixLength()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTargetCidrRange` <a name="ResetTargetCidrRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetTargetCidrRange"></a>

```csharp
private void ResetTargetCidrRange()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkConnectivityInternalRange resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkConnectivityInternalRange.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkConnectivityInternalRange.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkConnectivityInternalRange.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkConnectivityInternalRange.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNetworkConnectivityInternalRange resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkConnectivityInternalRange to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkConnectivityInternalRange that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkConnectivityInternalRange to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.migration">Migration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference">GoogleNetworkConnectivityInternalRangeMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference">GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.users">Users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.ipCidrRangeInput">IpCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.migrationInput">MigrationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.overlapsInput">OverlapsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.peeringInput">PeeringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.prefixLengthInput">PrefixLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.targetCidrRangeInput">TargetCidrRangeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.usageInput">UsageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.overlaps">Overlaps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.peering">Peering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.prefixLength">PrefixLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.targetCidrRange">TargetCidrRange</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.usage">Usage</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Migration`<sup>Required</sup> <a name="Migration" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.migration"></a>

```csharp
public GoogleNetworkConnectivityInternalRangeMigrationOutputReference Migration { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference">GoogleNetworkConnectivityInternalRangeMigrationOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.timeouts"></a>

```csharp
public GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference">GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference</a>

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.users"></a>

```csharp
public string[] Users { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpCidrRangeInput`<sup>Optional</sup> <a name="IpCidrRangeInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.ipCidrRangeInput"></a>

```csharp
public string IpCidrRangeInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MigrationInput`<sup>Optional</sup> <a name="MigrationInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.migrationInput"></a>

```csharp
public GoogleNetworkConnectivityInternalRangeMigration MigrationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `OverlapsInput`<sup>Optional</sup> <a name="OverlapsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.overlapsInput"></a>

```csharp
public string[] OverlapsInput { get; }
```

- *Type:* string[]

---

##### `PeeringInput`<sup>Optional</sup> <a name="PeeringInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.peeringInput"></a>

```csharp
public string PeeringInput { get; }
```

- *Type:* string

---

##### `PrefixLengthInput`<sup>Optional</sup> <a name="PrefixLengthInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.prefixLengthInput"></a>

```csharp
public double PrefixLengthInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TargetCidrRangeInput`<sup>Optional</sup> <a name="TargetCidrRangeInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.targetCidrRangeInput"></a>

```csharp
public string[] TargetCidrRangeInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UsageInput`<sup>Optional</sup> <a name="UsageInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.usageInput"></a>

```csharp
public string UsageInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Overlaps`<sup>Required</sup> <a name="Overlaps" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.overlaps"></a>

```csharp
public string[] Overlaps { get; }
```

- *Type:* string[]

---

##### `Peering`<sup>Required</sup> <a name="Peering" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.peering"></a>

```csharp
public string Peering { get; }
```

- *Type:* string

---

##### `PrefixLength`<sup>Required</sup> <a name="PrefixLength" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.prefixLength"></a>

```csharp
public double PrefixLength { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `TargetCidrRange`<sup>Required</sup> <a name="TargetCidrRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.targetCidrRange"></a>

```csharp
public string[] TargetCidrRange { get; }
```

- *Type:* string[]

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.usage"></a>

```csharp
public string Usage { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkConnectivityInternalRangeConfig <a name="GoogleNetworkConnectivityInternalRangeConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityInternalRangeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Network,
    string Peering,
    string Usage,
    string Description = null,
    string Id = null,
    string IpCidrRange = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    GoogleNetworkConnectivityInternalRangeMigration Migration = null,
    string[] Overlaps = null,
    double PrefixLength = null,
    string Project = null,
    string[] TargetCidrRange = null,
    GoogleNetworkConnectivityInternalRangeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.name">Name</a></code> | <code>string</code> | The name of the policy based route. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.network">Network</a></code> | <code>string</code> | Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.peering">Peering</a></code> | <code>string</code> | The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.usage">Usage</a></code> | <code>string</code> | The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC", "FOR_MIGRATION"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#id GoogleNetworkConnectivityInternalRange#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | The IP range that this internal range defines. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.migration">Migration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.overlaps">Overlaps</a></code> | <code>string[]</code> | Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.prefixLength">PrefixLength</a></code> | <code>double</code> | An alternate to ipCidrRange. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#project GoogleNetworkConnectivityInternalRange#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.targetCidrRange">TargetCidrRange</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the policy based route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#name GoogleNetworkConnectivityInternalRange#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#network GoogleNetworkConnectivityInternalRange#network}

---

##### `Peering`<sup>Required</sup> <a name="Peering" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.peering"></a>

```csharp
public string Peering { get; set; }
```

- *Type:* string

The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#peering GoogleNetworkConnectivityInternalRange#peering}

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.usage"></a>

```csharp
public string Usage { get; set; }
```

- *Type:* string

The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC", "FOR_MIGRATION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#usage GoogleNetworkConnectivityInternalRange#usage}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#description GoogleNetworkConnectivityInternalRange#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#id GoogleNetworkConnectivityInternalRange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpCidrRange`<sup>Optional</sup> <a name="IpCidrRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; set; }
```

- *Type:* string

The IP range that this internal range defines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#ip_cidr_range GoogleNetworkConnectivityInternalRange#ip_cidr_range}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#labels GoogleNetworkConnectivityInternalRange#labels}

---

##### `Migration`<sup>Optional</sup> <a name="Migration" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.migration"></a>

```csharp
public GoogleNetworkConnectivityInternalRangeMigration Migration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#migration GoogleNetworkConnectivityInternalRange#migration}

---

##### `Overlaps`<sup>Optional</sup> <a name="Overlaps" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.overlaps"></a>

```csharp
public string[] Overlaps { get; set; }
```

- *Type:* string[]

Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#overlaps GoogleNetworkConnectivityInternalRange#overlaps}

---

##### `PrefixLength`<sup>Optional</sup> <a name="PrefixLength" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.prefixLength"></a>

```csharp
public double PrefixLength { get; set; }
```

- *Type:* double

An alternate to ipCidrRange.

Can be set when trying to create a reservation that automatically finds a free range of the given size.
If both ipCidrRange and prefixLength are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#prefix_length GoogleNetworkConnectivityInternalRange#prefix_length}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#project GoogleNetworkConnectivityInternalRange#project}.

---

##### `TargetCidrRange`<sup>Optional</sup> <a name="TargetCidrRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.targetCidrRange"></a>

```csharp
public string[] TargetCidrRange { get; set; }
```

- *Type:* string[]

Optional.

Can be set to narrow down or pick a different address space while searching for a free range.
If not set, defaults to the "10.0.0.0/8" address space. This can be used to search in other rfc-1918 address spaces like "172.16.0.0/12" and "192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#target_cidr_range GoogleNetworkConnectivityInternalRange#target_cidr_range}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.timeouts"></a>

```csharp
public GoogleNetworkConnectivityInternalRangeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#timeouts GoogleNetworkConnectivityInternalRange#timeouts}

---

### GoogleNetworkConnectivityInternalRangeMigration <a name="GoogleNetworkConnectivityInternalRangeMigration" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityInternalRangeMigration {
    string Source,
    string Target
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration.property.source">Source</a></code> | <code>string</code> | Resource path as an URI of the source resource, for example a subnet. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration.property.target">Target</a></code> | <code>string</code> | Resource path of the target resource. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Resource path as an URI of the source resource, for example a subnet.

The project for the source resource should match the project for the
InternalRange.
An example /projects/{project}/regions/{region}/subnetworks/{subnet}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#source GoogleNetworkConnectivityInternalRange#source}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Resource path of the target resource.

The target project can be
different, as in the cases when migrating to peer networks. The resource
may not exist yet.
For example /projects/{project}/regions/{region}/subnetworks/{subnet}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#target GoogleNetworkConnectivityInternalRange#target}

---

### GoogleNetworkConnectivityInternalRangeTimeouts <a name="GoogleNetworkConnectivityInternalRangeTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityInternalRangeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#create GoogleNetworkConnectivityInternalRange#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#delete GoogleNetworkConnectivityInternalRange#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#update GoogleNetworkConnectivityInternalRange#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#create GoogleNetworkConnectivityInternalRange#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#delete GoogleNetworkConnectivityInternalRange#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#update GoogleNetworkConnectivityInternalRange#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkConnectivityInternalRangeMigrationOutputReference <a name="GoogleNetworkConnectivityInternalRangeMigrationOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityInternalRangeMigrationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkConnectivityInternalRangeMigration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a>

---


### GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference <a name="GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



