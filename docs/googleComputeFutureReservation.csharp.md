# `googleComputeFutureReservation` Submodule <a name="`googleComputeFutureReservation` Submodule" id="@cdktf/provider-google-beta.googleComputeFutureReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeFutureReservation <a name="GoogleComputeFutureReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation google_compute_future_reservation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservation(Construct Scope, string Id, GoogleComputeFutureReservationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig">GoogleComputeFutureReservationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig">GoogleComputeFutureReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAggregateReservation">PutAggregateReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAutoCreatedReservationsDuration">PutAutoCreatedReservationsDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putCommitmentInfo">PutCommitmentInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putShareSettings">PutShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putSpecificSkuProperties">PutSpecificSkuProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeWindow">PutTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAggregateReservation">ResetAggregateReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoCreatedReservationsDeleteTime">ResetAutoCreatedReservationsDeleteTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoCreatedReservationsDuration">ResetAutoCreatedReservationsDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoDeleteAutoCreatedReservations">ResetAutoDeleteAutoCreatedReservations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetCommitmentInfo">ResetCommitmentInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetDeploymentType">ResetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetPlanningStatus">ResetPlanningStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetReservationMode">ResetReservationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetReservationName">ResetReservationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSchedulingType">ResetSchedulingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetShareSettings">ResetShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSpecificReservationRequired">ResetSpecificReservationRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSpecificSkuProperties">ResetSpecificSkuProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAggregateReservation` <a name="PutAggregateReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAggregateReservation"></a>

```csharp
private void PutAggregateReservation(GoogleComputeFutureReservationAggregateReservation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAggregateReservation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a>

---

##### `PutAutoCreatedReservationsDuration` <a name="PutAutoCreatedReservationsDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAutoCreatedReservationsDuration"></a>

```csharp
private void PutAutoCreatedReservationsDuration(GoogleComputeFutureReservationAutoCreatedReservationsDuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putAutoCreatedReservationsDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a>

---

##### `PutCommitmentInfo` <a name="PutCommitmentInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putCommitmentInfo"></a>

```csharp
private void PutCommitmentInfo(GoogleComputeFutureReservationCommitmentInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putCommitmentInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a>

---

##### `PutShareSettings` <a name="PutShareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putShareSettings"></a>

```csharp
private void PutShareSettings(GoogleComputeFutureReservationShareSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putShareSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a>

---

##### `PutSpecificSkuProperties` <a name="PutSpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putSpecificSkuProperties"></a>

```csharp
private void PutSpecificSkuProperties(GoogleComputeFutureReservationSpecificSkuProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putSpecificSkuProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeFutureReservationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts">GoogleComputeFutureReservationTimeouts</a>

---

##### `PutTimeWindow` <a name="PutTimeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeWindow"></a>

```csharp
private void PutTimeWindow(GoogleComputeFutureReservationTimeWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.putTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a>

---

##### `ResetAggregateReservation` <a name="ResetAggregateReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAggregateReservation"></a>

```csharp
private void ResetAggregateReservation()
```

##### `ResetAutoCreatedReservationsDeleteTime` <a name="ResetAutoCreatedReservationsDeleteTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoCreatedReservationsDeleteTime"></a>

```csharp
private void ResetAutoCreatedReservationsDeleteTime()
```

##### `ResetAutoCreatedReservationsDuration` <a name="ResetAutoCreatedReservationsDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoCreatedReservationsDuration"></a>

```csharp
private void ResetAutoCreatedReservationsDuration()
```

##### `ResetAutoDeleteAutoCreatedReservations` <a name="ResetAutoDeleteAutoCreatedReservations" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetAutoDeleteAutoCreatedReservations"></a>

```csharp
private void ResetAutoDeleteAutoCreatedReservations()
```

##### `ResetCommitmentInfo` <a name="ResetCommitmentInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetCommitmentInfo"></a>

```csharp
private void ResetCommitmentInfo()
```

##### `ResetDeploymentType` <a name="ResetDeploymentType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetDeploymentType"></a>

```csharp
private void ResetDeploymentType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetNamePrefix"></a>

```csharp
private void ResetNamePrefix()
```

##### `ResetPlanningStatus` <a name="ResetPlanningStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetPlanningStatus"></a>

```csharp
private void ResetPlanningStatus()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetReservationMode` <a name="ResetReservationMode" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetReservationMode"></a>

```csharp
private void ResetReservationMode()
```

##### `ResetReservationName` <a name="ResetReservationName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetReservationName"></a>

```csharp
private void ResetReservationName()
```

##### `ResetSchedulingType` <a name="ResetSchedulingType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSchedulingType"></a>

```csharp
private void ResetSchedulingType()
```

##### `ResetShareSettings` <a name="ResetShareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetShareSettings"></a>

```csharp
private void ResetShareSettings()
```

##### `ResetSpecificReservationRequired` <a name="ResetSpecificReservationRequired" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSpecificReservationRequired"></a>

```csharp
private void ResetSpecificReservationRequired()
```

##### `ResetSpecificSkuProperties` <a name="ResetSpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetSpecificSkuProperties"></a>

```csharp
private void ResetSpecificSkuProperties()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeFutureReservation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeFutureReservation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeFutureReservation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeFutureReservation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeFutureReservation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeFutureReservation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeFutureReservation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeFutureReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeFutureReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.aggregateReservation">AggregateReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference">GoogleComputeFutureReservationAggregateReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDuration">AutoCreatedReservationsDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference">GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.commitmentInfo">CommitmentInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference">GoogleComputeFutureReservationCommitmentInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.selfLinkWithId">SelfLinkWithId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.shareSettings">ShareSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference">GoogleComputeFutureReservationShareSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificSkuProperties">SpecificSkuProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference">GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList">GoogleComputeFutureReservationStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference">GoogleComputeFutureReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeWindow">TimeWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference">GoogleComputeFutureReservationTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.aggregateReservationInput">AggregateReservationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDeleteTimeInput">AutoCreatedReservationsDeleteTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDurationInput">AutoCreatedReservationsDurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoDeleteAutoCreatedReservationsInput">AutoDeleteAutoCreatedReservationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.commitmentInfoInput">CommitmentInfoInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.planningStatusInput">PlanningStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationModeInput">ReservationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationNameInput">ReservationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.schedulingTypeInput">SchedulingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.shareSettingsInput">ShareSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificReservationRequiredInput">SpecificReservationRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificSkuPropertiesInput">SpecificSkuPropertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeWindowInput">TimeWindowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDeleteTime">AutoCreatedReservationsDeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoDeleteAutoCreatedReservations">AutoDeleteAutoCreatedReservations</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.planningStatus">PlanningStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationMode">ReservationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationName">ReservationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.schedulingType">SchedulingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificReservationRequired">SpecificReservationRequired</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AggregateReservation`<sup>Required</sup> <a name="AggregateReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.aggregateReservation"></a>

```csharp
public GoogleComputeFutureReservationAggregateReservationOutputReference AggregateReservation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference">GoogleComputeFutureReservationAggregateReservationOutputReference</a>

---

##### `AutoCreatedReservationsDuration`<sup>Required</sup> <a name="AutoCreatedReservationsDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDuration"></a>

```csharp
public GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference AutoCreatedReservationsDuration { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference">GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference</a>

---

##### `CommitmentInfo`<sup>Required</sup> <a name="CommitmentInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.commitmentInfo"></a>

```csharp
public GoogleComputeFutureReservationCommitmentInfoOutputReference CommitmentInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference">GoogleComputeFutureReservationCommitmentInfoOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `SelfLinkWithId`<sup>Required</sup> <a name="SelfLinkWithId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.selfLinkWithId"></a>

```csharp
public string SelfLinkWithId { get; }
```

- *Type:* string

---

##### `ShareSettings`<sup>Required</sup> <a name="ShareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.shareSettings"></a>

```csharp
public GoogleComputeFutureReservationShareSettingsOutputReference ShareSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference">GoogleComputeFutureReservationShareSettingsOutputReference</a>

---

##### `SpecificSkuProperties`<sup>Required</sup> <a name="SpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificSkuProperties"></a>

```csharp
public GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference SpecificSkuProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference">GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.status"></a>

```csharp
public GoogleComputeFutureReservationStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList">GoogleComputeFutureReservationStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeouts"></a>

```csharp
public GoogleComputeFutureReservationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference">GoogleComputeFutureReservationTimeoutsOutputReference</a>

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeWindow"></a>

```csharp
public GoogleComputeFutureReservationTimeWindowOutputReference TimeWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference">GoogleComputeFutureReservationTimeWindowOutputReference</a>

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `AggregateReservationInput`<sup>Optional</sup> <a name="AggregateReservationInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.aggregateReservationInput"></a>

```csharp
public GoogleComputeFutureReservationAggregateReservation AggregateReservationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a>

---

##### `AutoCreatedReservationsDeleteTimeInput`<sup>Optional</sup> <a name="AutoCreatedReservationsDeleteTimeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDeleteTimeInput"></a>

```csharp
public string AutoCreatedReservationsDeleteTimeInput { get; }
```

- *Type:* string

---

##### `AutoCreatedReservationsDurationInput`<sup>Optional</sup> <a name="AutoCreatedReservationsDurationInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDurationInput"></a>

```csharp
public GoogleComputeFutureReservationAutoCreatedReservationsDuration AutoCreatedReservationsDurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a>

---

##### `AutoDeleteAutoCreatedReservationsInput`<sup>Optional</sup> <a name="AutoDeleteAutoCreatedReservationsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoDeleteAutoCreatedReservationsInput"></a>

```csharp
public object AutoDeleteAutoCreatedReservationsInput { get; }
```

- *Type:* object

---

##### `CommitmentInfoInput`<sup>Optional</sup> <a name="CommitmentInfoInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.commitmentInfoInput"></a>

```csharp
public GoogleComputeFutureReservationCommitmentInfo CommitmentInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a>

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.deploymentTypeInput"></a>

```csharp
public string DeploymentTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `PlanningStatusInput`<sup>Optional</sup> <a name="PlanningStatusInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.planningStatusInput"></a>

```csharp
public string PlanningStatusInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReservationModeInput`<sup>Optional</sup> <a name="ReservationModeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationModeInput"></a>

```csharp
public string ReservationModeInput { get; }
```

- *Type:* string

---

##### `ReservationNameInput`<sup>Optional</sup> <a name="ReservationNameInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationNameInput"></a>

```csharp
public string ReservationNameInput { get; }
```

- *Type:* string

---

##### `SchedulingTypeInput`<sup>Optional</sup> <a name="SchedulingTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.schedulingTypeInput"></a>

```csharp
public string SchedulingTypeInput { get; }
```

- *Type:* string

---

##### `ShareSettingsInput`<sup>Optional</sup> <a name="ShareSettingsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.shareSettingsInput"></a>

```csharp
public GoogleComputeFutureReservationShareSettings ShareSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a>

---

##### `SpecificReservationRequiredInput`<sup>Optional</sup> <a name="SpecificReservationRequiredInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificReservationRequiredInput"></a>

```csharp
public object SpecificReservationRequiredInput { get; }
```

- *Type:* object

---

##### `SpecificSkuPropertiesInput`<sup>Optional</sup> <a name="SpecificSkuPropertiesInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificSkuPropertiesInput"></a>

```csharp
public GoogleComputeFutureReservationSpecificSkuProperties SpecificSkuPropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeWindowInput`<sup>Optional</sup> <a name="TimeWindowInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.timeWindowInput"></a>

```csharp
public GoogleComputeFutureReservationTimeWindow TimeWindowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a>

---

##### `AutoCreatedReservationsDeleteTime`<sup>Required</sup> <a name="AutoCreatedReservationsDeleteTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoCreatedReservationsDeleteTime"></a>

```csharp
public string AutoCreatedReservationsDeleteTime { get; }
```

- *Type:* string

---

##### `AutoDeleteAutoCreatedReservations`<sup>Required</sup> <a name="AutoDeleteAutoCreatedReservations" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.autoDeleteAutoCreatedReservations"></a>

```csharp
public object AutoDeleteAutoCreatedReservations { get; }
```

- *Type:* object

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `PlanningStatus`<sup>Required</sup> <a name="PlanningStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.planningStatus"></a>

```csharp
public string PlanningStatus { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ReservationMode`<sup>Required</sup> <a name="ReservationMode" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationMode"></a>

```csharp
public string ReservationMode { get; }
```

- *Type:* string

---

##### `ReservationName`<sup>Required</sup> <a name="ReservationName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.reservationName"></a>

```csharp
public string ReservationName { get; }
```

- *Type:* string

---

##### `SchedulingType`<sup>Required</sup> <a name="SchedulingType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.schedulingType"></a>

```csharp
public string SchedulingType { get; }
```

- *Type:* string

---

##### `SpecificReservationRequired`<sup>Required</sup> <a name="SpecificReservationRequired" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.specificReservationRequired"></a>

```csharp
public object SpecificReservationRequired { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeFutureReservationAggregateReservation <a name="GoogleComputeFutureReservationAggregateReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationAggregateReservation {
    object ReservedResources,
    string VmFamily = null,
    string WorkloadType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.reservedResources">ReservedResources</a></code> | <code>object</code> | reserved_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.vmFamily">VmFamily</a></code> | <code>string</code> | The VM family that all instances scheduled against this reservation must belong to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.workloadType">WorkloadType</a></code> | <code>string</code> | The workload type of the instances that will target this reservation. Possible values: ["BATCH", "SERVING", "UNSPECIFIED"]. |

---

##### `ReservedResources`<sup>Required</sup> <a name="ReservedResources" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.reservedResources"></a>

```csharp
public object ReservedResources { get; set; }
```

- *Type:* object

reserved_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#reserved_resources GoogleComputeFutureReservation#reserved_resources}

---

##### `VmFamily`<sup>Optional</sup> <a name="VmFamily" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.vmFamily"></a>

```csharp
public string VmFamily { get; set; }
```

- *Type:* string

The VM family that all instances scheduled against this reservation must belong to.

Possible values: ["VM_FAMILY_CLOUD_TPU_DEVICE_CT3", "VM_FAMILY_CLOUD_TPU_LITE_DEVICE_CT5L", "VM_FAMILY_CLOUD_TPU_LITE_POD_SLICE_CT5LP", "VM_FAMILY_CLOUD_TPU_LITE_POD_SLICE_CT6E", "VM_FAMILY_CLOUD_TPU_POD_SLICE_CT3P", "VM_FAMILY_CLOUD_TPU_POD_SLICE_CT4P", "VM_FAMILY_CLOUD_TPU_POD_SLICE_CT5P"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#vm_family GoogleComputeFutureReservation#vm_family}

---

##### `WorkloadType`<sup>Optional</sup> <a name="WorkloadType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation.property.workloadType"></a>

```csharp
public string WorkloadType { get; set; }
```

- *Type:* string

The workload type of the instances that will target this reservation. Possible values: ["BATCH", "SERVING", "UNSPECIFIED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#workload_type GoogleComputeFutureReservation#workload_type}

---

### GoogleComputeFutureReservationAggregateReservationReservedResources <a name="GoogleComputeFutureReservationAggregateReservationReservedResources" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationAggregateReservationReservedResources {
    GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator Accelerator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources.property.accelerator">Accelerator</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a></code> | accelerator block. |

---

##### `Accelerator`<sup>Optional</sup> <a name="Accelerator" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResources.property.accelerator"></a>

```csharp
public GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator Accelerator { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a>

accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#accelerator GoogleComputeFutureReservation#accelerator}

---

### GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator <a name="GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator {
    double AcceleratorCount = null,
    string AcceleratorType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | Number of accelerators of specified type. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | Full or partial URL to accelerator type. e.g. "projects/{PROJECT}/zones/{ZONE}/acceleratorTypes/ct4l". |

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; set; }
```

- *Type:* double

Number of accelerators of specified type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#accelerator_count GoogleComputeFutureReservation#accelerator_count}

---

##### `AcceleratorType`<sup>Optional</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; set; }
```

- *Type:* string

Full or partial URL to accelerator type. e.g. "projects/{PROJECT}/zones/{ZONE}/acceleratorTypes/ct4l".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#accelerator_type GoogleComputeFutureReservation#accelerator_type}

---

### GoogleComputeFutureReservationAutoCreatedReservationsDuration <a name="GoogleComputeFutureReservationAutoCreatedReservationsDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationAutoCreatedReservationsDuration {
    double Nanos = null,
    string Seconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration.property.nanos">Nanos</a></code> | <code>double</code> | Span of time that's a fraction of a second at nanosecond resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration.property.seconds">Seconds</a></code> | <code>string</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#nanos GoogleComputeFutureReservation#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration.property.seconds"></a>

```csharp
public string Seconds { get; set; }
```

- *Type:* string

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#seconds GoogleComputeFutureReservation#seconds}

---

### GoogleComputeFutureReservationCommitmentInfo <a name="GoogleComputeFutureReservationCommitmentInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationCommitmentInfo {
    string CommitmentName = null,
    string CommitmentPlan = null,
    string PreviousCommitmentTerms = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.commitmentName">CommitmentName</a></code> | <code>string</code> | name of the commitment where capacity is being delivered to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.commitmentPlan">CommitmentPlan</a></code> | <code>string</code> | Indicates if a Commitment needs to be created as part of FR delivery. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.previousCommitmentTerms">PreviousCommitmentTerms</a></code> | <code>string</code> | Only applicable if FR is delivering to the same reservation. |

---

##### `CommitmentName`<sup>Optional</sup> <a name="CommitmentName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.commitmentName"></a>

```csharp
public string CommitmentName { get; set; }
```

- *Type:* string

name of the commitment where capacity is being delivered to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#commitment_name GoogleComputeFutureReservation#commitment_name}

---

##### `CommitmentPlan`<sup>Optional</sup> <a name="CommitmentPlan" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.commitmentPlan"></a>

```csharp
public string CommitmentPlan { get; set; }
```

- *Type:* string

Indicates if a Commitment needs to be created as part of FR delivery.

If this field is not present, then no commitment needs to be created. Possible values: ["INVALID", "THIRTY_SIX_MONTH", "TWELVE_MONTH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#commitment_plan GoogleComputeFutureReservation#commitment_plan}

---

##### `PreviousCommitmentTerms`<sup>Optional</sup> <a name="PreviousCommitmentTerms" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo.property.previousCommitmentTerms"></a>

```csharp
public string PreviousCommitmentTerms { get; set; }
```

- *Type:* string

Only applicable if FR is delivering to the same reservation.

If set, all parent commitments will be extended to match the end date of the plan for this commitment. Possible values: ["EXTEND"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#previous_commitment_terms GoogleComputeFutureReservation#previous_commitment_terms}

---

### GoogleComputeFutureReservationConfig <a name="GoogleComputeFutureReservationConfig" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    GoogleComputeFutureReservationTimeWindow TimeWindow,
    GoogleComputeFutureReservationAggregateReservation AggregateReservation = null,
    string AutoCreatedReservationsDeleteTime = null,
    GoogleComputeFutureReservationAutoCreatedReservationsDuration AutoCreatedReservationsDuration = null,
    object AutoDeleteAutoCreatedReservations = null,
    GoogleComputeFutureReservationCommitmentInfo CommitmentInfo = null,
    string DeploymentType = null,
    string Description = null,
    string Id = null,
    string NamePrefix = null,
    string PlanningStatus = null,
    string Project = null,
    string ReservationMode = null,
    string ReservationName = null,
    string SchedulingType = null,
    GoogleComputeFutureReservationShareSettings ShareSettings = null,
    object SpecificReservationRequired = null,
    GoogleComputeFutureReservationSpecificSkuProperties SpecificSkuProperties = null,
    GoogleComputeFutureReservationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.timeWindow">TimeWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a></code> | time_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.aggregateReservation">AggregateReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a></code> | aggregate_reservation block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoCreatedReservationsDeleteTime">AutoCreatedReservationsDeleteTime</a></code> | <code>string</code> | Future timestamp when the FR auto-created reservations will be deleted by Compute Engine. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoCreatedReservationsDuration">AutoCreatedReservationsDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a></code> | auto_created_reservations_duration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoDeleteAutoCreatedReservations">AutoDeleteAutoCreatedReservations</a></code> | <code>object</code> | Setting for enabling or disabling automatic deletion for auto-created reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.commitmentInfo">CommitmentInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a></code> | commitment_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.deploymentType">DeploymentType</a></code> | <code>string</code> | Type of the deployment requested as part of future reservation. Possible values: ["DENSE", "FLEXIBLE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#id GoogleComputeFutureReservation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Name prefix for the reservations to be created at the time of delivery. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.planningStatus">PlanningStatus</a></code> | <code>string</code> | Planning state before being submitted for evaluation Possible values: ["DRAFT", "SUBMITTED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#project GoogleComputeFutureReservation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.reservationMode">ReservationMode</a></code> | <code>string</code> | The reservation mode which determines reservation-termination behavior and expected pricing. Possible values: ["CALENDAR", "DEFAULT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.reservationName">ReservationName</a></code> | <code>string</code> | Name of reservations where the capacity is provisioned at the time of delivery of future reservations. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.schedulingType">SchedulingType</a></code> | <code>string</code> | Maintenance information for this reservation Possible values: ["GROUPED", "INDEPENDENT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.shareSettings">ShareSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a></code> | share_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.specificReservationRequired">SpecificReservationRequired</a></code> | <code>object</code> | Indicates whether the auto-created reservation can be consumed by VMs with affinity for "any" reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.specificSkuProperties">SpecificSkuProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a></code> | specific_sku_properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts">GoogleComputeFutureReservationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the las
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#name GoogleComputeFutureReservation#name}

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.timeWindow"></a>

```csharp
public GoogleComputeFutureReservationTimeWindow TimeWindow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a>

time_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#time_window GoogleComputeFutureReservation#time_window}

---

##### `AggregateReservation`<sup>Optional</sup> <a name="AggregateReservation" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.aggregateReservation"></a>

```csharp
public GoogleComputeFutureReservationAggregateReservation AggregateReservation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a>

aggregate_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#aggregate_reservation GoogleComputeFutureReservation#aggregate_reservation}

---

##### `AutoCreatedReservationsDeleteTime`<sup>Optional</sup> <a name="AutoCreatedReservationsDeleteTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoCreatedReservationsDeleteTime"></a>

```csharp
public string AutoCreatedReservationsDeleteTime { get; set; }
```

- *Type:* string

Future timestamp when the FR auto-created reservations will be deleted by Compute Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#auto_created_reservations_delete_time GoogleComputeFutureReservation#auto_created_reservations_delete_time}

---

##### `AutoCreatedReservationsDuration`<sup>Optional</sup> <a name="AutoCreatedReservationsDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoCreatedReservationsDuration"></a>

```csharp
public GoogleComputeFutureReservationAutoCreatedReservationsDuration AutoCreatedReservationsDuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a>

auto_created_reservations_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#auto_created_reservations_duration GoogleComputeFutureReservation#auto_created_reservations_duration}

---

##### `AutoDeleteAutoCreatedReservations`<sup>Optional</sup> <a name="AutoDeleteAutoCreatedReservations" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.autoDeleteAutoCreatedReservations"></a>

```csharp
public object AutoDeleteAutoCreatedReservations { get; set; }
```

- *Type:* object

Setting for enabling or disabling automatic deletion for auto-created reservation.

If set to true, auto-created reservations will be deleted at Future Reservation's end time (default) or at user's defined timestamp if any of the [autoCreatedReservationsDeleteTime, autoCreatedReservationsDuration] values is specified. For keeping auto-created reservation indefinitely, this value should be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#auto_delete_auto_created_reservations GoogleComputeFutureReservation#auto_delete_auto_created_reservations}

---

##### `CommitmentInfo`<sup>Optional</sup> <a name="CommitmentInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.commitmentInfo"></a>

```csharp
public GoogleComputeFutureReservationCommitmentInfo CommitmentInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a>

commitment_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#commitment_info GoogleComputeFutureReservation#commitment_info}

---

##### `DeploymentType`<sup>Optional</sup> <a name="DeploymentType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.deploymentType"></a>

```csharp
public string DeploymentType { get; set; }
```

- *Type:* string

Type of the deployment requested as part of future reservation. Possible values: ["DENSE", "FLEXIBLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#deployment_type GoogleComputeFutureReservation#deployment_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#description GoogleComputeFutureReservation#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#id GoogleComputeFutureReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Name prefix for the reservations to be created at the time of delivery.

The name prefix must comply with RFC1035. Maximum allowed length for name prefix is 20. Automatically created reservations name format will be -date-####.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#name_prefix GoogleComputeFutureReservation#name_prefix}

---

##### `PlanningStatus`<sup>Optional</sup> <a name="PlanningStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.planningStatus"></a>

```csharp
public string PlanningStatus { get; set; }
```

- *Type:* string

Planning state before being submitted for evaluation Possible values: ["DRAFT", "SUBMITTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#planning_status GoogleComputeFutureReservation#planning_status}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#project GoogleComputeFutureReservation#project}.

---

##### `ReservationMode`<sup>Optional</sup> <a name="ReservationMode" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.reservationMode"></a>

```csharp
public string ReservationMode { get; set; }
```

- *Type:* string

The reservation mode which determines reservation-termination behavior and expected pricing. Possible values: ["CALENDAR", "DEFAULT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#reservation_mode GoogleComputeFutureReservation#reservation_mode}

---

##### `ReservationName`<sup>Optional</sup> <a name="ReservationName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.reservationName"></a>

```csharp
public string ReservationName { get; set; }
```

- *Type:* string

Name of reservations where the capacity is provisioned at the time of delivery of future reservations.

If the reservation with the given name does not exist already, it is created automatically at the time of Approval with INACTIVE state till specified start-time. Either provide the reservationName or a namePrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#reservation_name GoogleComputeFutureReservation#reservation_name}

---

##### `SchedulingType`<sup>Optional</sup> <a name="SchedulingType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.schedulingType"></a>

```csharp
public string SchedulingType { get; set; }
```

- *Type:* string

Maintenance information for this reservation Possible values: ["GROUPED", "INDEPENDENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#scheduling_type GoogleComputeFutureReservation#scheduling_type}

---

##### `ShareSettings`<sup>Optional</sup> <a name="ShareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.shareSettings"></a>

```csharp
public GoogleComputeFutureReservationShareSettings ShareSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a>

share_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#share_settings GoogleComputeFutureReservation#share_settings}

---

##### `SpecificReservationRequired`<sup>Optional</sup> <a name="SpecificReservationRequired" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.specificReservationRequired"></a>

```csharp
public object SpecificReservationRequired { get; set; }
```

- *Type:* object

Indicates whether the auto-created reservation can be consumed by VMs with affinity for "any" reservation.

If the field is set, then only VMs that target the reservation by name can consume from the delivered reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#specific_reservation_required GoogleComputeFutureReservation#specific_reservation_required}

---

##### `SpecificSkuProperties`<sup>Optional</sup> <a name="SpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.specificSkuProperties"></a>

```csharp
public GoogleComputeFutureReservationSpecificSkuProperties SpecificSkuProperties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a>

specific_sku_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#specific_sku_properties GoogleComputeFutureReservation#specific_sku_properties}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationConfig.property.timeouts"></a>

```csharp
public GoogleComputeFutureReservationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts">GoogleComputeFutureReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#timeouts GoogleComputeFutureReservation#timeouts}

---

### GoogleComputeFutureReservationShareSettings <a name="GoogleComputeFutureReservationShareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationShareSettings {
    object ProjectMap = null,
    string[] Projects = null,
    string ShareType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.projectMap">ProjectMap</a></code> | <code>object</code> | project_map block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.projects">Projects</a></code> | <code>string[]</code> | list of Project names to specify consumer projects for this shared-reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.shareType">ShareType</a></code> | <code>string</code> | Type of sharing for this future reservation. Possible values: ["LOCAL", "SPECIFIC_PROJECTS"]. |

---

##### `ProjectMap`<sup>Optional</sup> <a name="ProjectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.projectMap"></a>

```csharp
public object ProjectMap { get; set; }
```

- *Type:* object

project_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#project_map GoogleComputeFutureReservation#project_map}

---

##### `Projects`<sup>Optional</sup> <a name="Projects" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.projects"></a>

```csharp
public string[] Projects { get; set; }
```

- *Type:* string[]

list of Project names to specify consumer projects for this shared-reservation.

This is only valid when shareType's value is SPECIFIC_PROJECTS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#projects GoogleComputeFutureReservation#projects}

---

##### `ShareType`<sup>Optional</sup> <a name="ShareType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings.property.shareType"></a>

```csharp
public string ShareType { get; set; }
```

- *Type:* string

Type of sharing for this future reservation. Possible values: ["LOCAL", "SPECIFIC_PROJECTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#share_type GoogleComputeFutureReservation#share_type}

---

### GoogleComputeFutureReservationShareSettingsProjectMap <a name="GoogleComputeFutureReservationShareSettingsProjectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationShareSettingsProjectMap {
    string Id,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#id GoogleComputeFutureReservation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap.property.projectId">ProjectId</a></code> | <code>string</code> | The project ID, should be same as the key of this project config in the parent map. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#id GoogleComputeFutureReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMap.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The project ID, should be same as the key of this project config in the parent map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#project_id GoogleComputeFutureReservation#project_id}

---

### GoogleComputeFutureReservationSpecificSkuProperties <a name="GoogleComputeFutureReservationSpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationSpecificSkuProperties {
    GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties InstanceProperties = null,
    string SourceInstanceTemplate = null,
    string TotalCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.instanceProperties">InstanceProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a></code> | instance_properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.sourceInstanceTemplate">SourceInstanceTemplate</a></code> | <code>string</code> | The instance template that will be used to populate the ReservedInstanceProperties of the future reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.totalCount">TotalCount</a></code> | <code>string</code> | Total number of instances for which capacity assurance is requested at a future time period. |

---

##### `InstanceProperties`<sup>Optional</sup> <a name="InstanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.instanceProperties"></a>

```csharp
public GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties InstanceProperties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a>

instance_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#instance_properties GoogleComputeFutureReservation#instance_properties}

---

##### `SourceInstanceTemplate`<sup>Optional</sup> <a name="SourceInstanceTemplate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.sourceInstanceTemplate"></a>

```csharp
public string SourceInstanceTemplate { get; set; }
```

- *Type:* string

The instance template that will be used to populate the ReservedInstanceProperties of the future reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#source_instance_template GoogleComputeFutureReservation#source_instance_template}

---

##### `TotalCount`<sup>Optional</sup> <a name="TotalCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties.property.totalCount"></a>

```csharp
public string TotalCount { get; set; }
```

- *Type:* string

Total number of instances for which capacity assurance is requested at a future time period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#total_count GoogleComputeFutureReservation#total_count}

---

### GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties {
    object GuestAccelerators = null,
    object LocalSsds = null,
    string LocationHint = null,
    string MachineType = null,
    double MaintenanceFreezeDurationHours = null,
    string MaintenanceInterval = null,
    string MinCpuPlatform = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.guestAccelerators">GuestAccelerators</a></code> | <code>object</code> | guest_accelerators block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.localSsds">LocalSsds</a></code> | <code>object</code> | local_ssds block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.locationHint">LocationHint</a></code> | <code>string</code> | An opaque location hint used to place the allocation close to other resources. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.machineType">MachineType</a></code> | <code>string</code> | Specifies type of machine (name only) which has fixed number of vCPUs and fixed amount of memory. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.maintenanceFreezeDurationHours">MaintenanceFreezeDurationHours</a></code> | <code>double</code> | Specifies the number of hours after reservation creation where instances using the reservation won't be scheduled for maintenance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.maintenanceInterval">MaintenanceInterval</a></code> | <code>string</code> | Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC Possible values: ["PERIODIC"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>string</code> | Minimum cpu platform the reservation. |

---

##### `GuestAccelerators`<sup>Optional</sup> <a name="GuestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.guestAccelerators"></a>

```csharp
public object GuestAccelerators { get; set; }
```

- *Type:* object

guest_accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#guest_accelerators GoogleComputeFutureReservation#guest_accelerators}

---

##### `LocalSsds`<sup>Optional</sup> <a name="LocalSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.localSsds"></a>

```csharp
public object LocalSsds { get; set; }
```

- *Type:* object

local_ssds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#local_ssds GoogleComputeFutureReservation#local_ssds}

---

##### `LocationHint`<sup>Optional</sup> <a name="LocationHint" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.locationHint"></a>

```csharp
public string LocationHint { get; set; }
```

- *Type:* string

An opaque location hint used to place the allocation close to other resources.

This field is for use by internal tools that use the public API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#location_hint GoogleComputeFutureReservation#location_hint}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

Specifies type of machine (name only) which has fixed number of vCPUs and fixed amount of memory.

This also includes specifying custom machine type following custom-NUMBER_OF_CPUS-AMOUNT_OF_MEMORY pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#machine_type GoogleComputeFutureReservation#machine_type}

---

##### `MaintenanceFreezeDurationHours`<sup>Optional</sup> <a name="MaintenanceFreezeDurationHours" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.maintenanceFreezeDurationHours"></a>

```csharp
public double MaintenanceFreezeDurationHours { get; set; }
```

- *Type:* double

Specifies the number of hours after reservation creation where instances using the reservation won't be scheduled for maintenance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#maintenance_freeze_duration_hours GoogleComputeFutureReservation#maintenance_freeze_duration_hours}

---

##### `MaintenanceInterval`<sup>Optional</sup> <a name="MaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.maintenanceInterval"></a>

```csharp
public string MaintenanceInterval { get; set; }
```

- *Type:* string

Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC Possible values: ["PERIODIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#maintenance_interval GoogleComputeFutureReservation#maintenance_interval}

---

##### `MinCpuPlatform`<sup>Optional</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties.property.minCpuPlatform"></a>

```csharp
public string MinCpuPlatform { get; set; }
```

- *Type:* string

Minimum cpu platform the reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#min_cpu_platform GoogleComputeFutureReservation#min_cpu_platform}

---

### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators {
    double AcceleratorCount = null,
    string AcceleratorType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | The number of the guest accelerator cards exposed to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | Full or partial URL of the accelerator type resource to attach to this instance. |

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; set; }
```

- *Type:* double

The number of the guest accelerator cards exposed to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#accelerator_count GoogleComputeFutureReservation#accelerator_count}

---

##### `AcceleratorType`<sup>Optional</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAccelerators.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; set; }
```

- *Type:* string

Full or partial URL of the accelerator type resource to attach to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#accelerator_type GoogleComputeFutureReservation#accelerator_type}

---

### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds {
    string DiskSizeGb = null,
    string Interface = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds.property.diskSizeGb">DiskSizeGb</a></code> | <code>string</code> | Specifies the size of the disk in base-2 GB. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds.property.interface">Interface</a></code> | <code>string</code> | Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. |

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds.property.diskSizeGb"></a>

```csharp
public string DiskSizeGb { get; set; }
```

- *Type:* string

Specifies the size of the disk in base-2 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#disk_size_gb GoogleComputeFutureReservation#disk_size_gb}

---

##### `Interface`<sup>Optional</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsds.property.interface"></a>

```csharp
public string Interface { get; set; }
```

- *Type:* string

Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME.

The default is SCSI. Possible values: ["SCSI", "NVME"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#interface GoogleComputeFutureReservation#interface}

---

### GoogleComputeFutureReservationStatus <a name="GoogleComputeFutureReservationStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatus {

};
```


### GoogleComputeFutureReservationStatusLastKnownGoodState <a name="GoogleComputeFutureReservationStatusLastKnownGoodState" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodState.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodState {

};
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo {

};
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs {

};
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings {

};
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap {

};
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties {

};
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties {

};
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators {

};
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds {

};
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow {

};
```


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration {

};
```


### GoogleComputeFutureReservationStatusSpecificSkuProperties <a name="GoogleComputeFutureReservationStatusSpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusSpecificSkuProperties {

};
```


### GoogleComputeFutureReservationTimeouts <a name="GoogleComputeFutureReservationTimeouts" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#create GoogleComputeFutureReservation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#delete GoogleComputeFutureReservation#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#update GoogleComputeFutureReservation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#create GoogleComputeFutureReservation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#delete GoogleComputeFutureReservation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#update GoogleComputeFutureReservation#update}.

---

### GoogleComputeFutureReservationTimeWindow <a name="GoogleComputeFutureReservationTimeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationTimeWindow {
    string StartTime,
    GoogleComputeFutureReservationTimeWindowDuration Duration = null,
    string EndTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.startTime">StartTime</a></code> | <code>string</code> | Start time of the future reservation in RFC3339 format. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.duration">Duration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a></code> | duration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.endTime">EndTime</a></code> | <code>string</code> | End time of the future reservation in RFC3339 format. |

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Start time of the future reservation in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#start_time GoogleComputeFutureReservation#start_time}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.duration"></a>

```csharp
public GoogleComputeFutureReservationTimeWindowDuration Duration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a>

duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#duration GoogleComputeFutureReservation#duration}

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

End time of the future reservation in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#end_time GoogleComputeFutureReservation#end_time}

---

### GoogleComputeFutureReservationTimeWindowDuration <a name="GoogleComputeFutureReservationTimeWindowDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationTimeWindowDuration {
    double Nanos = null,
    string Seconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration.property.nanos">Nanos</a></code> | <code>double</code> | Span of time that's a fraction of a second at nanosecond resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration.property.seconds">Seconds</a></code> | <code>string</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Span of time that's a fraction of a second at nanosecond resolution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#nanos GoogleComputeFutureReservation#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration.property.seconds"></a>

```csharp
public string Seconds { get; set; }
```

- *Type:* string

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_future_reservation#seconds GoogleComputeFutureReservation#seconds}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeFutureReservationAggregateReservationOutputReference <a name="GoogleComputeFutureReservationAggregateReservationOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationAggregateReservationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.putReservedResources">PutReservedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resetVmFamily">ResetVmFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resetWorkloadType">ResetWorkloadType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReservedResources` <a name="PutReservedResources" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.putReservedResources"></a>

```csharp
private void PutReservedResources(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.putReservedResources.parameter.value"></a>

- *Type:* object

---

##### `ResetVmFamily` <a name="ResetVmFamily" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resetVmFamily"></a>

```csharp
private void ResetVmFamily()
```

##### `ResetWorkloadType` <a name="ResetWorkloadType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.resetWorkloadType"></a>

```csharp
private void ResetWorkloadType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.reservedResources">ReservedResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList">GoogleComputeFutureReservationAggregateReservationReservedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.reservedResourcesInput">ReservedResourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.vmFamilyInput">VmFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.workloadTypeInput">WorkloadTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.vmFamily">VmFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.workloadType">WorkloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReservedResources`<sup>Required</sup> <a name="ReservedResources" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.reservedResources"></a>

```csharp
public GoogleComputeFutureReservationAggregateReservationReservedResourcesList ReservedResources { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList">GoogleComputeFutureReservationAggregateReservationReservedResourcesList</a>

---

##### `ReservedResourcesInput`<sup>Optional</sup> <a name="ReservedResourcesInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.reservedResourcesInput"></a>

```csharp
public object ReservedResourcesInput { get; }
```

- *Type:* object

---

##### `VmFamilyInput`<sup>Optional</sup> <a name="VmFamilyInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.vmFamilyInput"></a>

```csharp
public string VmFamilyInput { get; }
```

- *Type:* string

---

##### `WorkloadTypeInput`<sup>Optional</sup> <a name="WorkloadTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.workloadTypeInput"></a>

```csharp
public string WorkloadTypeInput { get; }
```

- *Type:* string

---

##### `VmFamily`<sup>Required</sup> <a name="VmFamily" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.vmFamily"></a>

```csharp
public string VmFamily { get; }
```

- *Type:* string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.workloadType"></a>

```csharp
public string WorkloadType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeFutureReservationAggregateReservation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservation">GoogleComputeFutureReservationAggregateReservation</a>

---


### GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference <a name="GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resetAcceleratorType">ResetAcceleratorType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resetAcceleratorCount"></a>

```csharp
private void ResetAcceleratorCount()
```

##### `ResetAcceleratorType` <a name="ResetAcceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.resetAcceleratorType"></a>

```csharp
private void ResetAcceleratorType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorCountInput"></a>

```csharp
public double AcceleratorCountInput { get; }
```

- *Type:* double

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorTypeInput"></a>

```csharp
public string AcceleratorTypeInput { get; }
```

- *Type:* string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; }
```

- *Type:* double

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a>

---


### GoogleComputeFutureReservationAggregateReservationReservedResourcesList <a name="GoogleComputeFutureReservationAggregateReservationReservedResourcesList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationAggregateReservationReservedResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.get"></a>

```csharp
private GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference <a name="GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.putAccelerator">PutAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.resetAccelerator">ResetAccelerator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccelerator` <a name="PutAccelerator" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.putAccelerator"></a>

```csharp
private void PutAccelerator(GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.putAccelerator.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a>

---

##### `ResetAccelerator` <a name="ResetAccelerator" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.resetAccelerator"></a>

```csharp
private void ResetAccelerator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.accelerator">Accelerator</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference">GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.acceleratorInput">AcceleratorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Accelerator`<sup>Required</sup> <a name="Accelerator" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.accelerator"></a>

```csharp
public GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference Accelerator { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference">GoogleComputeFutureReservationAggregateReservationReservedResourcesAcceleratorOutputReference</a>

---

##### `AcceleratorInput`<sup>Optional</sup> <a name="AcceleratorInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.acceleratorInput"></a>

```csharp
public GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator AcceleratorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator">GoogleComputeFutureReservationAggregateReservationReservedResourcesAccelerator</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAggregateReservationReservedResourcesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference <a name="GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.resetSeconds"></a>

```csharp
private void ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.secondsInput">SecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.seconds">Seconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.secondsInput"></a>

```csharp
public string SecondsInput { get; }
```

- *Type:* string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.seconds"></a>

```csharp
public string Seconds { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDurationOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeFutureReservationAutoCreatedReservationsDuration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationAutoCreatedReservationsDuration">GoogleComputeFutureReservationAutoCreatedReservationsDuration</a>

---


### GoogleComputeFutureReservationCommitmentInfoOutputReference <a name="GoogleComputeFutureReservationCommitmentInfoOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationCommitmentInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetCommitmentName">ResetCommitmentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetCommitmentPlan">ResetCommitmentPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetPreviousCommitmentTerms">ResetPreviousCommitmentTerms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommitmentName` <a name="ResetCommitmentName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetCommitmentName"></a>

```csharp
private void ResetCommitmentName()
```

##### `ResetCommitmentPlan` <a name="ResetCommitmentPlan" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetCommitmentPlan"></a>

```csharp
private void ResetCommitmentPlan()
```

##### `ResetPreviousCommitmentTerms` <a name="ResetPreviousCommitmentTerms" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.resetPreviousCommitmentTerms"></a>

```csharp
private void ResetPreviousCommitmentTerms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentNameInput">CommitmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentPlanInput">CommitmentPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.previousCommitmentTermsInput">PreviousCommitmentTermsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentName">CommitmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentPlan">CommitmentPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.previousCommitmentTerms">PreviousCommitmentTerms</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommitmentNameInput`<sup>Optional</sup> <a name="CommitmentNameInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentNameInput"></a>

```csharp
public string CommitmentNameInput { get; }
```

- *Type:* string

---

##### `CommitmentPlanInput`<sup>Optional</sup> <a name="CommitmentPlanInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentPlanInput"></a>

```csharp
public string CommitmentPlanInput { get; }
```

- *Type:* string

---

##### `PreviousCommitmentTermsInput`<sup>Optional</sup> <a name="PreviousCommitmentTermsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.previousCommitmentTermsInput"></a>

```csharp
public string PreviousCommitmentTermsInput { get; }
```

- *Type:* string

---

##### `CommitmentName`<sup>Required</sup> <a name="CommitmentName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentName"></a>

```csharp
public string CommitmentName { get; }
```

- *Type:* string

---

##### `CommitmentPlan`<sup>Required</sup> <a name="CommitmentPlan" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.commitmentPlan"></a>

```csharp
public string CommitmentPlan { get; }
```

- *Type:* string

---

##### `PreviousCommitmentTerms`<sup>Required</sup> <a name="PreviousCommitmentTerms" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.previousCommitmentTerms"></a>

```csharp
public string PreviousCommitmentTerms { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfoOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeFutureReservationCommitmentInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationCommitmentInfo">GoogleComputeFutureReservationCommitmentInfo</a>

---


### GoogleComputeFutureReservationShareSettingsOutputReference <a name="GoogleComputeFutureReservationShareSettingsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationShareSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.putProjectMap">PutProjectMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetProjectMap">ResetProjectMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetProjects">ResetProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetShareType">ResetShareType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProjectMap` <a name="PutProjectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.putProjectMap"></a>

```csharp
private void PutProjectMap(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.putProjectMap.parameter.value"></a>

- *Type:* object

---

##### `ResetProjectMap` <a name="ResetProjectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetProjectMap"></a>

```csharp
private void ResetProjectMap()
```

##### `ResetProjects` <a name="ResetProjects" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetProjects"></a>

```csharp
private void ResetProjects()
```

##### `ResetShareType` <a name="ResetShareType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.resetShareType"></a>

```csharp
private void ResetShareType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectMap">ProjectMap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList">GoogleComputeFutureReservationShareSettingsProjectMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectMapInput">ProjectMapInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectsInput">ProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.shareTypeInput">ShareTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projects">Projects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.shareType">ShareType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectMap`<sup>Required</sup> <a name="ProjectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectMap"></a>

```csharp
public GoogleComputeFutureReservationShareSettingsProjectMapList ProjectMap { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList">GoogleComputeFutureReservationShareSettingsProjectMapList</a>

---

##### `ProjectMapInput`<sup>Optional</sup> <a name="ProjectMapInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectMapInput"></a>

```csharp
public object ProjectMapInput { get; }
```

- *Type:* object

---

##### `ProjectsInput`<sup>Optional</sup> <a name="ProjectsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projectsInput"></a>

```csharp
public string[] ProjectsInput { get; }
```

- *Type:* string[]

---

##### `ShareTypeInput`<sup>Optional</sup> <a name="ShareTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.shareTypeInput"></a>

```csharp
public string ShareTypeInput { get; }
```

- *Type:* string

---

##### `Projects`<sup>Required</sup> <a name="Projects" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.projects"></a>

```csharp
public string[] Projects { get; }
```

- *Type:* string[]

---

##### `ShareType`<sup>Required</sup> <a name="ShareType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.shareType"></a>

```csharp
public string ShareType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeFutureReservationShareSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettings">GoogleComputeFutureReservationShareSettings</a>

---


### GoogleComputeFutureReservationShareSettingsProjectMapList <a name="GoogleComputeFutureReservationShareSettingsProjectMapList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationShareSettingsProjectMapList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.get"></a>

```csharp
private GoogleComputeFutureReservationShareSettingsProjectMapOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeFutureReservationShareSettingsProjectMapOutputReference <a name="GoogleComputeFutureReservationShareSettingsProjectMapOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationShareSettingsProjectMapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationShareSettingsProjectMapOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get"></a>

```csharp
private GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resetAcceleratorType">ResetAcceleratorType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resetAcceleratorCount"></a>

```csharp
private void ResetAcceleratorCount()
```

##### `ResetAcceleratorType` <a name="ResetAcceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resetAcceleratorType"></a>

```csharp
private void ResetAcceleratorType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCountInput"></a>

```csharp
public double AcceleratorCountInput { get; }
```

- *Type:* double

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorTypeInput"></a>

```csharp
public string AcceleratorTypeInput { get; }
```

- *Type:* string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; }
```

- *Type:* double

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get"></a>

```csharp
private GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resetInterface">ResetInterface</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resetDiskSizeGb"></a>

```csharp
private void ResetDiskSizeGb()
```

##### `ResetInterface` <a name="ResetInterface" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resetInterface"></a>

```csharp
private void ResetInterface()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interfaceInput">InterfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interface">Interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGbInput"></a>

```csharp
public string DiskSizeGbInput { get; }
```

- *Type:* string

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interfaceInput"></a>

```csharp
public string InterfaceInput { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb"></a>

```csharp
public string DiskSizeGb { get; }
```

- *Type:* string

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interface"></a>

```csharp
public string Interface { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference <a name="GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putGuestAccelerators">PutGuestAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putLocalSsds">PutLocalSsds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetGuestAccelerators">ResetGuestAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetLocalSsds">ResetLocalSsds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetLocationHint">ResetLocationHint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMaintenanceFreezeDurationHours">ResetMaintenanceFreezeDurationHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMaintenanceInterval">ResetMaintenanceInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMinCpuPlatform">ResetMinCpuPlatform</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGuestAccelerators` <a name="PutGuestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putGuestAccelerators"></a>

```csharp
private void PutGuestAccelerators(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putGuestAccelerators.parameter.value"></a>

- *Type:* object

---

##### `PutLocalSsds` <a name="PutLocalSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putLocalSsds"></a>

```csharp
private void PutLocalSsds(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.putLocalSsds.parameter.value"></a>

- *Type:* object

---

##### `ResetGuestAccelerators` <a name="ResetGuestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetGuestAccelerators"></a>

```csharp
private void ResetGuestAccelerators()
```

##### `ResetLocalSsds` <a name="ResetLocalSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetLocalSsds"></a>

```csharp
private void ResetLocalSsds()
```

##### `ResetLocationHint` <a name="ResetLocationHint" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetLocationHint"></a>

```csharp
private void ResetLocationHint()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMachineType"></a>

```csharp
private void ResetMachineType()
```

##### `ResetMaintenanceFreezeDurationHours` <a name="ResetMaintenanceFreezeDurationHours" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMaintenanceFreezeDurationHours"></a>

```csharp
private void ResetMaintenanceFreezeDurationHours()
```

##### `ResetMaintenanceInterval` <a name="ResetMaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMaintenanceInterval"></a>

```csharp
private void ResetMaintenanceInterval()
```

##### `ResetMinCpuPlatform` <a name="ResetMinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.resetMinCpuPlatform"></a>

```csharp
private void ResetMinCpuPlatform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAccelerators">GuestAccelerators</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsds">LocalSsds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAcceleratorsInput">GuestAcceleratorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsdsInput">LocalSsdsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHintInput">LocationHintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHoursInput">MaintenanceFreezeDurationHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceIntervalInput">MaintenanceIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatformInput">MinCpuPlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHint">LocationHint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHours">MaintenanceFreezeDurationHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceInterval">MaintenanceInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GuestAccelerators`<sup>Required</sup> <a name="GuestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAccelerators"></a>

```csharp
public GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList GuestAccelerators { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList</a>

---

##### `LocalSsds`<sup>Required</sup> <a name="LocalSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsds"></a>

```csharp
public GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList LocalSsds { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesLocalSsdsList</a>

---

##### `GuestAcceleratorsInput`<sup>Optional</sup> <a name="GuestAcceleratorsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAcceleratorsInput"></a>

```csharp
public object GuestAcceleratorsInput { get; }
```

- *Type:* object

---

##### `LocalSsdsInput`<sup>Optional</sup> <a name="LocalSsdsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsdsInput"></a>

```csharp
public object LocalSsdsInput { get; }
```

- *Type:* object

---

##### `LocationHintInput`<sup>Optional</sup> <a name="LocationHintInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHintInput"></a>

```csharp
public string LocationHintInput { get; }
```

- *Type:* string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `MaintenanceFreezeDurationHoursInput`<sup>Optional</sup> <a name="MaintenanceFreezeDurationHoursInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHoursInput"></a>

```csharp
public double MaintenanceFreezeDurationHoursInput { get; }
```

- *Type:* double

---

##### `MaintenanceIntervalInput`<sup>Optional</sup> <a name="MaintenanceIntervalInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceIntervalInput"></a>

```csharp
public string MaintenanceIntervalInput { get; }
```

- *Type:* string

---

##### `MinCpuPlatformInput`<sup>Optional</sup> <a name="MinCpuPlatformInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatformInput"></a>

```csharp
public string MinCpuPlatformInput { get; }
```

- *Type:* string

---

##### `LocationHint`<sup>Required</sup> <a name="LocationHint" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHint"></a>

```csharp
public string LocationHint { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `MaintenanceFreezeDurationHours`<sup>Required</sup> <a name="MaintenanceFreezeDurationHours" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHours"></a>

```csharp
public double MaintenanceFreezeDurationHours { get; }
```

- *Type:* double

---

##### `MaintenanceInterval`<sup>Required</sup> <a name="MaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceInterval"></a>

```csharp
public string MaintenanceInterval { get; }
```

- *Type:* string

---

##### `MinCpuPlatform`<sup>Required</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatform"></a>

```csharp
public string MinCpuPlatform { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a>

---


### GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference <a name="GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.putInstanceProperties">PutInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetInstanceProperties">ResetInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetSourceInstanceTemplate">ResetSourceInstanceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetTotalCount">ResetTotalCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInstanceProperties` <a name="PutInstanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.putInstanceProperties"></a>

```csharp
private void PutInstanceProperties(GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.putInstanceProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a>

---

##### `ResetInstanceProperties` <a name="ResetInstanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetInstanceProperties"></a>

```csharp
private void ResetInstanceProperties()
```

##### `ResetSourceInstanceTemplate` <a name="ResetSourceInstanceTemplate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetSourceInstanceTemplate"></a>

```csharp
private void ResetSourceInstanceTemplate()
```

##### `ResetTotalCount` <a name="ResetTotalCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.resetTotalCount"></a>

```csharp
private void ResetTotalCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.instanceProperties">InstanceProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.instancePropertiesInput">InstancePropertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplateInput">SourceInstanceTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.totalCountInput">TotalCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplate">SourceInstanceTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.totalCount">TotalCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceProperties`<sup>Required</sup> <a name="InstanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.instanceProperties"></a>

```csharp
public GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference InstanceProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference">GoogleComputeFutureReservationSpecificSkuPropertiesInstancePropertiesOutputReference</a>

---

##### `InstancePropertiesInput`<sup>Optional</sup> <a name="InstancePropertiesInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.instancePropertiesInput"></a>

```csharp
public GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties InstancePropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationSpecificSkuPropertiesInstanceProperties</a>

---

##### `SourceInstanceTemplateInput`<sup>Optional</sup> <a name="SourceInstanceTemplateInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplateInput"></a>

```csharp
public string SourceInstanceTemplateInput { get; }
```

- *Type:* string

---

##### `TotalCountInput`<sup>Optional</sup> <a name="TotalCountInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.totalCountInput"></a>

```csharp
public string TotalCountInput { get; }
```

- *Type:* string

---

##### `SourceInstanceTemplate`<sup>Required</sup> <a name="SourceInstanceTemplate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplate"></a>

```csharp
public string SourceInstanceTemplate { get; }
```

- *Type:* string

---

##### `TotalCount`<sup>Required</sup> <a name="TotalCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.totalCount"></a>

```csharp
public string TotalCount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuPropertiesOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeFutureReservationSpecificSkuProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationSpecificSkuProperties">GoogleComputeFutureReservationSpecificSkuProperties</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.get"></a>

```csharp
private GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.count">Count</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.timeStamp">TimeStamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo">GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.count"></a>

```csharp
public string Count { get; }
```

- *Type:* string

---

##### `TimeStamp`<sup>Required</sup> <a name="TimeStamp" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.timeStamp"></a>

```csharp
public string TimeStamp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo">GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfo</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.get"></a>

```csharp
private GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.shareSettings">ShareSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.specificSkuProperties">SpecificSkuProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.timeWindow">TimeWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShareSettings`<sup>Required</sup> <a name="ShareSettings" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.shareSettings"></a>

```csharp
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList ShareSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList</a>

---

##### `SpecificSkuProperties`<sup>Required</sup> <a name="SpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.specificSkuProperties"></a>

```csharp
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList SpecificSkuProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList</a>

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.timeWindow"></a>

```csharp
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList TimeWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecs</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.get"></a>

```csharp
private GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.projectMap">ProjectMap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.projects">Projects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.shareType">ShareType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectMap`<sup>Required</sup> <a name="ProjectMap" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.projectMap"></a>

```csharp
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList ProjectMap { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList</a>

---

##### `Projects`<sup>Required</sup> <a name="Projects" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.projects"></a>

```csharp
public string[] Projects { get; }
```

- *Type:* string[]

---

##### `ShareType`<sup>Required</sup> <a name="ShareType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.shareType"></a>

```csharp
public string ShareType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettings</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.get"></a>

```csharp
private GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMapOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsShareSettingsProjectMap</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get"></a>

```csharp
private GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; }
```

- *Type:* double

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAccelerators</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.get"></a>

```csharp
private GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get"></a>

```csharp
private GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interface">Interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb"></a>

```csharp
public string DiskSizeGb { get; }
```

- *Type:* string

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.interface"></a>

```csharp
public string Interface { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsds</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAccelerators">GuestAccelerators</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsds">LocalSsds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHint">LocationHint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHours">MaintenanceFreezeDurationHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceInterval">MaintenanceInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GuestAccelerators`<sup>Required</sup> <a name="GuestAccelerators" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.guestAccelerators"></a>

```csharp
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList GuestAccelerators { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesGuestAcceleratorsList</a>

---

##### `LocalSsds`<sup>Required</sup> <a name="LocalSsds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.localSsds"></a>

```csharp
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList LocalSsds { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesLocalSsdsList</a>

---

##### `LocationHint`<sup>Required</sup> <a name="LocationHint" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.locationHint"></a>

```csharp
public string LocationHint { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `MaintenanceFreezeDurationHours`<sup>Required</sup> <a name="MaintenanceFreezeDurationHours" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceFreezeDurationHours"></a>

```csharp
public double MaintenanceFreezeDurationHours { get; }
```

- *Type:* double

---

##### `MaintenanceInterval`<sup>Required</sup> <a name="MaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.maintenanceInterval"></a>

```csharp
public string MaintenanceInterval { get; }
```

- *Type:* string

---

##### `MinCpuPlatform`<sup>Required</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.minCpuPlatform"></a>

```csharp
public string MinCpuPlatform { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstanceProperties</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.get"></a>

```csharp
private GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.instanceProperties">InstanceProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplate">SourceInstanceTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.totalCount">TotalCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceProperties`<sup>Required</sup> <a name="InstanceProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.instanceProperties"></a>

```csharp
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList InstanceProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesInstancePropertiesList</a>

---

##### `SourceInstanceTemplate`<sup>Required</sup> <a name="SourceInstanceTemplate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplate"></a>

```csharp
public string SourceInstanceTemplate { get; }
```

- *Type:* string

---

##### `TotalCount`<sup>Required</sup> <a name="TotalCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.totalCount"></a>

```csharp
public string TotalCount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuPropertiesOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsSpecificSkuProperties</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.get"></a>

```csharp
private GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.seconds">Seconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.seconds"></a>

```csharp
public string Seconds { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDuration</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.get"></a>

```csharp
private GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.duration">Duration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.duration"></a>

```csharp
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList Duration { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowDurationList</a>

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindowOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsTimeWindow</a>

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateList <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.get"></a>

```csharp
private GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference <a name="GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.existingMatchingUsageInfo">ExistingMatchingUsageInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList">GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.futureReservationSpecs">FutureReservationSpecs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.lockTime">LockTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.procurementStatus">ProcurementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodState">GoogleComputeFutureReservationStatusLastKnownGoodState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExistingMatchingUsageInfo`<sup>Required</sup> <a name="ExistingMatchingUsageInfo" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.existingMatchingUsageInfo"></a>

```csharp
public GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList ExistingMatchingUsageInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList">GoogleComputeFutureReservationStatusLastKnownGoodStateExistingMatchingUsageInfoList</a>

---

##### `FutureReservationSpecs`<sup>Required</sup> <a name="FutureReservationSpecs" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.futureReservationSpecs"></a>

```csharp
public GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList FutureReservationSpecs { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList">GoogleComputeFutureReservationStatusLastKnownGoodStateFutureReservationSpecsList</a>

---

##### `LockTime`<sup>Required</sup> <a name="LockTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.lockTime"></a>

```csharp
public string LockTime { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `ProcurementStatus`<sup>Required</sup> <a name="ProcurementStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.procurementStatus"></a>

```csharp
public string ProcurementStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeFutureReservationStatusLastKnownGoodState InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodState">GoogleComputeFutureReservationStatusLastKnownGoodState</a>

---


### GoogleComputeFutureReservationStatusList <a name="GoogleComputeFutureReservationStatusList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.get"></a>

```csharp
private GoogleComputeFutureReservationStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusOutputReference <a name="GoogleComputeFutureReservationStatusOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.amendmentStatus">AmendmentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.autoCreatedReservations">AutoCreatedReservations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.fulfilledCount">FulfilledCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.lastKnownGoodState">LastKnownGoodState</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList">GoogleComputeFutureReservationStatusLastKnownGoodStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.lockTime">LockTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.procurementStatus">ProcurementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.specificSkuProperties">SpecificSkuProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList">GoogleComputeFutureReservationStatusSpecificSkuPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatus">GoogleComputeFutureReservationStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmendmentStatus`<sup>Required</sup> <a name="AmendmentStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.amendmentStatus"></a>

```csharp
public string AmendmentStatus { get; }
```

- *Type:* string

---

##### `AutoCreatedReservations`<sup>Required</sup> <a name="AutoCreatedReservations" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.autoCreatedReservations"></a>

```csharp
public string[] AutoCreatedReservations { get; }
```

- *Type:* string[]

---

##### `FulfilledCount`<sup>Required</sup> <a name="FulfilledCount" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.fulfilledCount"></a>

```csharp
public string FulfilledCount { get; }
```

- *Type:* string

---

##### `LastKnownGoodState`<sup>Required</sup> <a name="LastKnownGoodState" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.lastKnownGoodState"></a>

```csharp
public GoogleComputeFutureReservationStatusLastKnownGoodStateList LastKnownGoodState { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusLastKnownGoodStateList">GoogleComputeFutureReservationStatusLastKnownGoodStateList</a>

---

##### `LockTime`<sup>Required</sup> <a name="LockTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.lockTime"></a>

```csharp
public string LockTime { get; }
```

- *Type:* string

---

##### `ProcurementStatus`<sup>Required</sup> <a name="ProcurementStatus" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.procurementStatus"></a>

```csharp
public string ProcurementStatus { get; }
```

- *Type:* string

---

##### `SpecificSkuProperties`<sup>Required</sup> <a name="SpecificSkuProperties" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.specificSkuProperties"></a>

```csharp
public GoogleComputeFutureReservationStatusSpecificSkuPropertiesList SpecificSkuProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList">GoogleComputeFutureReservationStatusSpecificSkuPropertiesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeFutureReservationStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatus">GoogleComputeFutureReservationStatus</a>

---


### GoogleComputeFutureReservationStatusSpecificSkuPropertiesList <a name="GoogleComputeFutureReservationStatusSpecificSkuPropertiesList" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusSpecificSkuPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.get"></a>

```csharp
private GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference <a name="GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplateId">SourceInstanceTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuProperties">GoogleComputeFutureReservationStatusSpecificSkuProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceInstanceTemplateId`<sup>Required</sup> <a name="SourceInstanceTemplateId" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.sourceInstanceTemplateId"></a>

```csharp
public string SourceInstanceTemplateId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuPropertiesOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeFutureReservationStatusSpecificSkuProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationStatusSpecificSkuProperties">GoogleComputeFutureReservationStatusSpecificSkuProperties</a>

---


### GoogleComputeFutureReservationTimeoutsOutputReference <a name="GoogleComputeFutureReservationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeFutureReservationTimeWindowDurationOutputReference <a name="GoogleComputeFutureReservationTimeWindowDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationTimeWindowDurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.resetSeconds"></a>

```csharp
private void ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.secondsInput">SecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.seconds">Seconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.secondsInput"></a>

```csharp
public string SecondsInput { get; }
```

- *Type:* string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.seconds"></a>

```csharp
public string Seconds { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeFutureReservationTimeWindowDuration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a>

---


### GoogleComputeFutureReservationTimeWindowOutputReference <a name="GoogleComputeFutureReservationTimeWindowOutputReference" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeFutureReservationTimeWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.putDuration">PutDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDuration` <a name="PutDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.putDuration"></a>

```csharp
private void PutDuration(GoogleComputeFutureReservationTimeWindowDuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.putDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a>

---

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resetDuration"></a>

```csharp
private void ResetDuration()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.duration">Duration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference">GoogleComputeFutureReservationTimeWindowDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.durationInput">DurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.duration"></a>

```csharp
public GoogleComputeFutureReservationTimeWindowDurationOutputReference Duration { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDurationOutputReference">GoogleComputeFutureReservationTimeWindowDurationOutputReference</a>

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.durationInput"></a>

```csharp
public GoogleComputeFutureReservationTimeWindowDuration DurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowDuration">GoogleComputeFutureReservationTimeWindowDuration</a>

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindowOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeFutureReservationTimeWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFutureReservation.GoogleComputeFutureReservationTimeWindow">GoogleComputeFutureReservationTimeWindow</a>

---



