# `googleNetappVolumeReplication` Submodule <a name="`googleNetappVolumeReplication` Submodule" id="@cdktf/provider-google-beta.googleNetappVolumeReplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetappVolumeReplication <a name="GoogleNetappVolumeReplication" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication google_netapp_volume_replication}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeReplication(Construct Scope, string Id, GoogleNetappVolumeReplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig">GoogleNetappVolumeReplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig">GoogleNetappVolumeReplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putDestinationVolumeParameters">PutDestinationVolumeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDeleteDestinationVolume">ResetDeleteDestinationVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDestinationVolumeParameters">ResetDestinationVolumeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetForceStopping">ResetForceStopping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetReplicationEnabled">ResetReplicationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetWaitForMirror">ResetWaitForMirror</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationVolumeParameters` <a name="PutDestinationVolumeParameters" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putDestinationVolumeParameters"></a>

```csharp
private void PutDestinationVolumeParameters(GoogleNetappVolumeReplicationDestinationVolumeParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putDestinationVolumeParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetappVolumeReplicationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts">GoogleNetappVolumeReplicationTimeouts</a>

---

##### `ResetDeleteDestinationVolume` <a name="ResetDeleteDestinationVolume" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDeleteDestinationVolume"></a>

```csharp
private void ResetDeleteDestinationVolume()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDestinationVolumeParameters` <a name="ResetDestinationVolumeParameters" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDestinationVolumeParameters"></a>

```csharp
private void ResetDestinationVolumeParameters()
```

##### `ResetForceStopping` <a name="ResetForceStopping" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetForceStopping"></a>

```csharp
private void ResetForceStopping()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetReplicationEnabled` <a name="ResetReplicationEnabled" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetReplicationEnabled"></a>

```csharp
private void ResetReplicationEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWaitForMirror` <a name="ResetWaitForMirror" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetWaitForMirror"></a>

```csharp
private void ResetWaitForMirror()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetappVolumeReplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetappVolumeReplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetappVolumeReplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetappVolumeReplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetappVolumeReplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNetappVolumeReplication resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetappVolumeReplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetappVolumeReplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetappVolumeReplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolume">DestinationVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolumeParameters">DestinationVolumeParameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference">GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.healthy">Healthy</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.mirrorState">MirrorState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.sourceVolume">SourceVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.stateDetails">StateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference">GoogleNetappVolumeReplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.transferStats">TransferStats</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList">GoogleNetappVolumeReplicationTransferStatsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.deleteDestinationVolumeInput">DeleteDestinationVolumeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolumeParametersInput">DestinationVolumeParametersInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forceStoppingInput">ForceStoppingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationEnabledInput">ReplicationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationScheduleInput">ReplicationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.volumeNameInput">VolumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.waitForMirrorInput">WaitForMirrorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.deleteDestinationVolume">DeleteDestinationVolume</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forceStopping">ForceStopping</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationEnabled">ReplicationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationSchedule">ReplicationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.volumeName">VolumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.waitForMirror">WaitForMirror</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DestinationVolume`<sup>Required</sup> <a name="DestinationVolume" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolume"></a>

```csharp
public string DestinationVolume { get; }
```

- *Type:* string

---

##### `DestinationVolumeParameters`<sup>Required</sup> <a name="DestinationVolumeParameters" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolumeParameters"></a>

```csharp
public GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference DestinationVolumeParameters { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference">GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Healthy`<sup>Required</sup> <a name="Healthy" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.healthy"></a>

```csharp
public IResolvable Healthy { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MirrorState`<sup>Required</sup> <a name="MirrorState" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.mirrorState"></a>

```csharp
public string MirrorState { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `SourceVolume`<sup>Required</sup> <a name="SourceVolume" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.sourceVolume"></a>

```csharp
public string SourceVolume { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateDetails`<sup>Required</sup> <a name="StateDetails" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.stateDetails"></a>

```csharp
public string StateDetails { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.timeouts"></a>

```csharp
public GoogleNetappVolumeReplicationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference">GoogleNetappVolumeReplicationTimeoutsOutputReference</a>

---

##### `TransferStats`<sup>Required</sup> <a name="TransferStats" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.transferStats"></a>

```csharp
public GoogleNetappVolumeReplicationTransferStatsList TransferStats { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList">GoogleNetappVolumeReplicationTransferStatsList</a>

---

##### `DeleteDestinationVolumeInput`<sup>Optional</sup> <a name="DeleteDestinationVolumeInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.deleteDestinationVolumeInput"></a>

```csharp
public object DeleteDestinationVolumeInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationVolumeParametersInput`<sup>Optional</sup> <a name="DestinationVolumeParametersInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolumeParametersInput"></a>

```csharp
public GoogleNetappVolumeReplicationDestinationVolumeParameters DestinationVolumeParametersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a>

---

##### `ForceStoppingInput`<sup>Optional</sup> <a name="ForceStoppingInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forceStoppingInput"></a>

```csharp
public object ForceStoppingInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReplicationEnabledInput`<sup>Optional</sup> <a name="ReplicationEnabledInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationEnabledInput"></a>

```csharp
public object ReplicationEnabledInput { get; }
```

- *Type:* object

---

##### `ReplicationScheduleInput`<sup>Optional</sup> <a name="ReplicationScheduleInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationScheduleInput"></a>

```csharp
public string ReplicationScheduleInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VolumeNameInput`<sup>Optional</sup> <a name="VolumeNameInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.volumeNameInput"></a>

```csharp
public string VolumeNameInput { get; }
```

- *Type:* string

---

##### `WaitForMirrorInput`<sup>Optional</sup> <a name="WaitForMirrorInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.waitForMirrorInput"></a>

```csharp
public object WaitForMirrorInput { get; }
```

- *Type:* object

---

##### `DeleteDestinationVolume`<sup>Required</sup> <a name="DeleteDestinationVolume" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.deleteDestinationVolume"></a>

```csharp
public object DeleteDestinationVolume { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ForceStopping`<sup>Required</sup> <a name="ForceStopping" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forceStopping"></a>

```csharp
public object ForceStopping { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ReplicationEnabled`<sup>Required</sup> <a name="ReplicationEnabled" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationEnabled"></a>

```csharp
public object ReplicationEnabled { get; }
```

- *Type:* object

---

##### `ReplicationSchedule`<sup>Required</sup> <a name="ReplicationSchedule" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationSchedule"></a>

```csharp
public string ReplicationSchedule { get; }
```

- *Type:* string

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.volumeName"></a>

```csharp
public string VolumeName { get; }
```

- *Type:* string

---

##### `WaitForMirror`<sup>Required</sup> <a name="WaitForMirror" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.waitForMirror"></a>

```csharp
public object WaitForMirror { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetappVolumeReplicationConfig <a name="GoogleNetappVolumeReplicationConfig" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeReplicationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string ReplicationSchedule,
    string VolumeName,
    object DeleteDestinationVolume = null,
    string Description = null,
    GoogleNetappVolumeReplicationDestinationVolumeParameters DestinationVolumeParameters = null,
    object ForceStopping = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    object ReplicationEnabled = null,
    GoogleNetappVolumeReplicationTimeouts Timeouts = null,
    object WaitForMirror = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.location">Location</a></code> | <code>string</code> | Name of region for this resource. The resource needs to be created in the region of the destination volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.name">Name</a></code> | <code>string</code> | The name of the replication. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.replicationSchedule">ReplicationSchedule</a></code> | <code>string</code> | Specifies the replication interval. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.volumeName">VolumeName</a></code> | <code>string</code> | The name of the existing source volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.deleteDestinationVolume">DeleteDestinationVolume</a></code> | <code>object</code> | A destination volume is created as part of replication creation. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.description">Description</a></code> | <code>string</code> | An description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.destinationVolumeParameters">DestinationVolumeParameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a></code> | destination_volume_parameters block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.forceStopping">ForceStopping</a></code> | <code>object</code> | Only replications with mirror_state=MIRRORED can be stopped. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#id GoogleNetappVolumeReplication#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#project GoogleNetappVolumeReplication#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.replicationEnabled">ReplicationEnabled</a></code> | <code>object</code> | Set to false to stop/break the mirror. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts">GoogleNetappVolumeReplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.waitForMirror">WaitForMirror</a></code> | <code>object</code> | Replication resource state is independent of mirror_state. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Name of region for this resource. The resource needs to be created in the region of the destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#location GoogleNetappVolumeReplication#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the replication. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#name GoogleNetappVolumeReplication#name}

---

##### `ReplicationSchedule`<sup>Required</sup> <a name="ReplicationSchedule" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.replicationSchedule"></a>

```csharp
public string ReplicationSchedule { get; set; }
```

- *Type:* string

Specifies the replication interval. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#replication_schedule GoogleNetappVolumeReplication#replication_schedule}

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.volumeName"></a>

```csharp
public string VolumeName { get; set; }
```

- *Type:* string

The name of the existing source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#volume_name GoogleNetappVolumeReplication#volume_name}

---

##### `DeleteDestinationVolume`<sup>Optional</sup> <a name="DeleteDestinationVolume" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.deleteDestinationVolume"></a>

```csharp
public object DeleteDestinationVolume { get; set; }
```

- *Type:* object

A destination volume is created as part of replication creation.

The destination volume will not became
under Terraform management unless you import it manually. If you delete the replication, this volume
will remain.
Setting this parameter to true will delete the *current* destination volume when destroying the
replication. If you reversed the replication direction, this will be your former source volume!
For production use, it is recommended to keep this parameter false to avoid accidental volume
deletion. Handle with care. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#delete_destination_volume GoogleNetappVolumeReplication#delete_destination_volume}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#description GoogleNetappVolumeReplication#description}

---

##### `DestinationVolumeParameters`<sup>Optional</sup> <a name="DestinationVolumeParameters" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.destinationVolumeParameters"></a>

```csharp
public GoogleNetappVolumeReplicationDestinationVolumeParameters DestinationVolumeParameters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a>

destination_volume_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#destination_volume_parameters GoogleNetappVolumeReplication#destination_volume_parameters}

---

##### `ForceStopping`<sup>Optional</sup> <a name="ForceStopping" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.forceStopping"></a>

```csharp
public object ForceStopping { get; set; }
```

- *Type:* object

Only replications with mirror_state=MIRRORED can be stopped.

A replication in mirror_state=TRANSFERRING
currently receives an update and stopping the update might be undesirable. Set this parameter to true
to stop anyway. All data transferred to the destination will be discarded and content of destination
volume will remain at the state of the last successful update. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#force_stopping GoogleNetappVolumeReplication#force_stopping}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#id GoogleNetappVolumeReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#labels GoogleNetappVolumeReplication#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#project GoogleNetappVolumeReplication#project}.

---

##### `ReplicationEnabled`<sup>Optional</sup> <a name="ReplicationEnabled" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.replicationEnabled"></a>

```csharp
public object ReplicationEnabled { get; set; }
```

- *Type:* object

Set to false to stop/break the mirror.

Stopping the mirror makes the destination volume read-write
and act independently from the source volume.
Set to true to enable/resume the mirror. WARNING: Resuming a mirror overwrites any changes
done to the destination volume with the content of the source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#replication_enabled GoogleNetappVolumeReplication#replication_enabled}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.timeouts"></a>

```csharp
public GoogleNetappVolumeReplicationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts">GoogleNetappVolumeReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#timeouts GoogleNetappVolumeReplication#timeouts}

---

##### `WaitForMirror`<sup>Optional</sup> <a name="WaitForMirror" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.waitForMirror"></a>

```csharp
public object WaitForMirror { get; set; }
```

- *Type:* object

Replication resource state is independent of mirror_state.

With enough data, it can take many hours
for mirror_state to reach MIRRORED. If you want Terraform to wait for the mirror to finish on
create/stop/resume operations, set this parameter to true. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#wait_for_mirror GoogleNetappVolumeReplication#wait_for_mirror}

---

### GoogleNetappVolumeReplicationDestinationVolumeParameters <a name="GoogleNetappVolumeReplicationDestinationVolumeParameters" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeReplicationDestinationVolumeParameters {
    string StoragePool,
    string Description = null,
    string ShareName = null,
    string VolumeId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.storagePool">StoragePool</a></code> | <code>string</code> | Name of an existing storage pool for the destination volume with format: 'projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.description">Description</a></code> | <code>string</code> | Description for the destination volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.shareName">ShareName</a></code> | <code>string</code> | Share name for destination volume. If not specified, name of source volume's share name will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.volumeId">VolumeId</a></code> | <code>string</code> | Name for the destination volume to be created. |

---

##### `StoragePool`<sup>Required</sup> <a name="StoragePool" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.storagePool"></a>

```csharp
public string StoragePool { get; set; }
```

- *Type:* string

Name of an existing storage pool for the destination volume with format: 'projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#storage_pool GoogleNetappVolumeReplication#storage_pool}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description for the destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#description GoogleNetappVolumeReplication#description}

---

##### `ShareName`<sup>Optional</sup> <a name="ShareName" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.shareName"></a>

```csharp
public string ShareName { get; set; }
```

- *Type:* string

Share name for destination volume. If not specified, name of source volume's share name will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#share_name GoogleNetappVolumeReplication#share_name}

---

##### `VolumeId`<sup>Optional</sup> <a name="VolumeId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.volumeId"></a>

```csharp
public string VolumeId { get; set; }
```

- *Type:* string

Name for the destination volume to be created.

If not specified, the name of the source volume will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#volume_id GoogleNetappVolumeReplication#volume_id}

---

### GoogleNetappVolumeReplicationTimeouts <a name="GoogleNetappVolumeReplicationTimeouts" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeReplicationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#create GoogleNetappVolumeReplication#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#delete GoogleNetappVolumeReplication#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#update GoogleNetappVolumeReplication#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#create GoogleNetappVolumeReplication#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#delete GoogleNetappVolumeReplication#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_netapp_volume_replication#update GoogleNetappVolumeReplication#update}.

---

### GoogleNetappVolumeReplicationTransferStats <a name="GoogleNetappVolumeReplicationTransferStats" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStats.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeReplicationTransferStats {

};
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference <a name="GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetShareName">ResetShareName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetVolumeId">ResetVolumeId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetShareName` <a name="ResetShareName" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetShareName"></a>

```csharp
private void ResetShareName()
```

##### `ResetVolumeId` <a name="ResetVolumeId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetVolumeId"></a>

```csharp
private void ResetVolumeId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareNameInput">ShareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePoolInput">StoragePoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeIdInput">VolumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareName">ShareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePool">StoragePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeId">VolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ShareNameInput`<sup>Optional</sup> <a name="ShareNameInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareNameInput"></a>

```csharp
public string ShareNameInput { get; }
```

- *Type:* string

---

##### `StoragePoolInput`<sup>Optional</sup> <a name="StoragePoolInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePoolInput"></a>

```csharp
public string StoragePoolInput { get; }
```

- *Type:* string

---

##### `VolumeIdInput`<sup>Optional</sup> <a name="VolumeIdInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeIdInput"></a>

```csharp
public string VolumeIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareName"></a>

```csharp
public string ShareName { get; }
```

- *Type:* string

---

##### `StoragePool`<sup>Required</sup> <a name="StoragePool" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePool"></a>

```csharp
public string StoragePool { get; }
```

- *Type:* string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeId"></a>

```csharp
public string VolumeId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.internalValue"></a>

```csharp
public GoogleNetappVolumeReplicationDestinationVolumeParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a>

---


### GoogleNetappVolumeReplicationTimeoutsOutputReference <a name="GoogleNetappVolumeReplicationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeReplicationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNetappVolumeReplicationTransferStatsList <a name="GoogleNetappVolumeReplicationTransferStatsList" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeReplicationTransferStatsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.get"></a>

```csharp
private GoogleNetappVolumeReplicationTransferStatsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleNetappVolumeReplicationTransferStatsOutputReference <a name="GoogleNetappVolumeReplicationTransferStatsOutputReference" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeReplicationTransferStatsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lagDuration">LagDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferBytes">LastTransferBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferDuration">LastTransferDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferEndTime">LastTransferEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferError">LastTransferError</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.totalTransferDuration">TotalTransferDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.transferBytes">TransferBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStats">GoogleNetappVolumeReplicationTransferStats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LagDuration`<sup>Required</sup> <a name="LagDuration" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lagDuration"></a>

```csharp
public string LagDuration { get; }
```

- *Type:* string

---

##### `LastTransferBytes`<sup>Required</sup> <a name="LastTransferBytes" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferBytes"></a>

```csharp
public string LastTransferBytes { get; }
```

- *Type:* string

---

##### `LastTransferDuration`<sup>Required</sup> <a name="LastTransferDuration" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferDuration"></a>

```csharp
public string LastTransferDuration { get; }
```

- *Type:* string

---

##### `LastTransferEndTime`<sup>Required</sup> <a name="LastTransferEndTime" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferEndTime"></a>

```csharp
public string LastTransferEndTime { get; }
```

- *Type:* string

---

##### `LastTransferError`<sup>Required</sup> <a name="LastTransferError" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferError"></a>

```csharp
public string LastTransferError { get; }
```

- *Type:* string

---

##### `TotalTransferDuration`<sup>Required</sup> <a name="TotalTransferDuration" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.totalTransferDuration"></a>

```csharp
public string TotalTransferDuration { get; }
```

- *Type:* string

---

##### `TransferBytes`<sup>Required</sup> <a name="TransferBytes" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.transferBytes"></a>

```csharp
public string TransferBytes { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.internalValue"></a>

```csharp
public GoogleNetappVolumeReplicationTransferStats InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStats">GoogleNetappVolumeReplicationTransferStats</a>

---



