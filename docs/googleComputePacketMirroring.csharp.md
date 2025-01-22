# `googleComputePacketMirroring` Submodule <a name="`googleComputePacketMirroring` Submodule" id="@cdktf/provider-google-beta.googleComputePacketMirroring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputePacketMirroring <a name="GoogleComputePacketMirroring" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring google_compute_packet_mirroring}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePacketMirroring(Construct Scope, string Id, GoogleComputePacketMirroringConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig">GoogleComputePacketMirroringConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig">GoogleComputePacketMirroringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putCollectorIlb">PutCollectorIlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putMirroredResources">PutMirroredResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCollectorIlb` <a name="PutCollectorIlb" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putCollectorIlb"></a>

```csharp
private void PutCollectorIlb(GoogleComputePacketMirroringCollectorIlb Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putCollectorIlb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlb">GoogleComputePacketMirroringCollectorIlb</a>

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putFilter"></a>

```csharp
private void PutFilter(GoogleComputePacketMirroringFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter">GoogleComputePacketMirroringFilter</a>

---

##### `PutMirroredResources` <a name="PutMirroredResources" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putMirroredResources"></a>

```csharp
private void PutMirroredResources(GoogleComputePacketMirroringMirroredResources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putMirroredResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources">GoogleComputePacketMirroringMirroredResources</a>

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putNetwork"></a>

```csharp
private void PutNetwork(GoogleComputePacketMirroringNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetwork">GoogleComputePacketMirroringNetwork</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputePacketMirroringTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts">GoogleComputePacketMirroringTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputePacketMirroring resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputePacketMirroring.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputePacketMirroring.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputePacketMirroring.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputePacketMirroring.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputePacketMirroring resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputePacketMirroring to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputePacketMirroring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputePacketMirroring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.collectorIlb">CollectorIlb</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference">GoogleComputePacketMirroringCollectorIlbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference">GoogleComputePacketMirroringFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.mirroredResources">MirroredResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference">GoogleComputePacketMirroringMirroredResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.network">Network</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference">GoogleComputePacketMirroringNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference">GoogleComputePacketMirroringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.collectorIlbInput">CollectorIlbInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlb">GoogleComputePacketMirroringCollectorIlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter">GoogleComputePacketMirroringFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.mirroredResourcesInput">MirroredResourcesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources">GoogleComputePacketMirroringMirroredResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetwork">GoogleComputePacketMirroringNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CollectorIlb`<sup>Required</sup> <a name="CollectorIlb" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.collectorIlb"></a>

```csharp
public GoogleComputePacketMirroringCollectorIlbOutputReference CollectorIlb { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference">GoogleComputePacketMirroringCollectorIlbOutputReference</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.filter"></a>

```csharp
public GoogleComputePacketMirroringFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference">GoogleComputePacketMirroringFilterOutputReference</a>

---

##### `MirroredResources`<sup>Required</sup> <a name="MirroredResources" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.mirroredResources"></a>

```csharp
public GoogleComputePacketMirroringMirroredResourcesOutputReference MirroredResources { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference">GoogleComputePacketMirroringMirroredResourcesOutputReference</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.network"></a>

```csharp
public GoogleComputePacketMirroringNetworkOutputReference Network { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference">GoogleComputePacketMirroringNetworkOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.timeouts"></a>

```csharp
public GoogleComputePacketMirroringTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference">GoogleComputePacketMirroringTimeoutsOutputReference</a>

---

##### `CollectorIlbInput`<sup>Optional</sup> <a name="CollectorIlbInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.collectorIlbInput"></a>

```csharp
public GoogleComputePacketMirroringCollectorIlb CollectorIlbInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlb">GoogleComputePacketMirroringCollectorIlb</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.filterInput"></a>

```csharp
public GoogleComputePacketMirroringFilter FilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter">GoogleComputePacketMirroringFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MirroredResourcesInput`<sup>Optional</sup> <a name="MirroredResourcesInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.mirroredResourcesInput"></a>

```csharp
public GoogleComputePacketMirroringMirroredResources MirroredResourcesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources">GoogleComputePacketMirroringMirroredResources</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.networkInput"></a>

```csharp
public GoogleComputePacketMirroringNetwork NetworkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetwork">GoogleComputePacketMirroringNetwork</a>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputePacketMirroringCollectorIlb <a name="GoogleComputePacketMirroringCollectorIlb" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlb.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePacketMirroringCollectorIlb {
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlb.property.url">Url</a></code> | <code>string</code> | The URL of the forwarding rule. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlb.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The URL of the forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#url GoogleComputePacketMirroring#url}

---

### GoogleComputePacketMirroringConfig <a name="GoogleComputePacketMirroringConfig" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePacketMirroringConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleComputePacketMirroringCollectorIlb CollectorIlb,
    GoogleComputePacketMirroringMirroredResources MirroredResources,
    string Name,
    GoogleComputePacketMirroringNetwork Network,
    string Description = null,
    GoogleComputePacketMirroringFilter Filter = null,
    string Id = null,
    double Priority = null,
    string Project = null,
    string Region = null,
    GoogleComputePacketMirroringTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.collectorIlb">CollectorIlb</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlb">GoogleComputePacketMirroringCollectorIlb</a></code> | collector_ilb block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.mirroredResources">MirroredResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources">GoogleComputePacketMirroringMirroredResources</a></code> | mirrored_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.name">Name</a></code> | <code>string</code> | The name of the packet mirroring rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.network">Network</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetwork">GoogleComputePacketMirroringNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.description">Description</a></code> | <code>string</code> | A human-readable description of the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter">GoogleComputePacketMirroringFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#id GoogleComputePacketMirroring#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.priority">Priority</a></code> | <code>double</code> | Since only one rule can be active at a time, priority is used to break ties in the case of two rules that apply to the same instances. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#project GoogleComputePacketMirroring#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.region">Region</a></code> | <code>string</code> | The Region in which the created address should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts">GoogleComputePacketMirroringTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CollectorIlb`<sup>Required</sup> <a name="CollectorIlb" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.collectorIlb"></a>

```csharp
public GoogleComputePacketMirroringCollectorIlb CollectorIlb { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlb">GoogleComputePacketMirroringCollectorIlb</a>

collector_ilb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#collector_ilb GoogleComputePacketMirroring#collector_ilb}

---

##### `MirroredResources`<sup>Required</sup> <a name="MirroredResources" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.mirroredResources"></a>

```csharp
public GoogleComputePacketMirroringMirroredResources MirroredResources { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources">GoogleComputePacketMirroringMirroredResources</a>

mirrored_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#mirrored_resources GoogleComputePacketMirroring#mirrored_resources}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the packet mirroring rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#name GoogleComputePacketMirroring#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.network"></a>

```csharp
public GoogleComputePacketMirroringNetwork Network { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetwork">GoogleComputePacketMirroringNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#network GoogleComputePacketMirroring#network}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-readable description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#description GoogleComputePacketMirroring#description}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.filter"></a>

```csharp
public GoogleComputePacketMirroringFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter">GoogleComputePacketMirroringFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#filter GoogleComputePacketMirroring#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#id GoogleComputePacketMirroring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Since only one rule can be active at a time, priority is used to break ties in the case of two rules that apply to the same instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#priority GoogleComputePacketMirroring#priority}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#project GoogleComputePacketMirroring#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The Region in which the created address should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#region GoogleComputePacketMirroring#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.timeouts"></a>

```csharp
public GoogleComputePacketMirroringTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts">GoogleComputePacketMirroringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#timeouts GoogleComputePacketMirroring#timeouts}

---

### GoogleComputePacketMirroringFilter <a name="GoogleComputePacketMirroringFilter" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePacketMirroringFilter {
    string[] CidrRanges = null,
    string Direction = null,
    string[] IpProtocols = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter.property.cidrRanges">CidrRanges</a></code> | <code>string[]</code> | IP CIDR ranges that apply as a filter on the source (ingress) or destination (egress) IP in the IP header. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter.property.direction">Direction</a></code> | <code>string</code> | Direction of traffic to mirror. Default value: "BOTH" Possible values: ["INGRESS", "EGRESS", "BOTH"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter.property.ipProtocols">IpProtocols</a></code> | <code>string[]</code> | Possible IP protocols including tcp, udp, icmp and esp. |

---

##### `CidrRanges`<sup>Optional</sup> <a name="CidrRanges" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter.property.cidrRanges"></a>

```csharp
public string[] CidrRanges { get; set; }
```

- *Type:* string[]

IP CIDR ranges that apply as a filter on the source (ingress) or destination (egress) IP in the IP header.

Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#cidr_ranges GoogleComputePacketMirroring#cidr_ranges}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Direction of traffic to mirror. Default value: "BOTH" Possible values: ["INGRESS", "EGRESS", "BOTH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#direction GoogleComputePacketMirroring#direction}

---

##### `IpProtocols`<sup>Optional</sup> <a name="IpProtocols" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter.property.ipProtocols"></a>

```csharp
public string[] IpProtocols { get; set; }
```

- *Type:* string[]

Possible IP protocols including tcp, udp, icmp and esp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#ip_protocols GoogleComputePacketMirroring#ip_protocols}

---

### GoogleComputePacketMirroringMirroredResources <a name="GoogleComputePacketMirroringMirroredResources" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePacketMirroringMirroredResources {
    object Instances = null,
    object Subnetworks = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources.property.instances">Instances</a></code> | <code>object</code> | instances block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources.property.subnetworks">Subnetworks</a></code> | <code>object</code> | subnetworks block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources.property.tags">Tags</a></code> | <code>string[]</code> | All instances with these tags will be mirrored. |

---

##### `Instances`<sup>Optional</sup> <a name="Instances" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources.property.instances"></a>

```csharp
public object Instances { get; set; }
```

- *Type:* object

instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#instances GoogleComputePacketMirroring#instances}

---

##### `Subnetworks`<sup>Optional</sup> <a name="Subnetworks" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources.property.subnetworks"></a>

```csharp
public object Subnetworks { get; set; }
```

- *Type:* object

subnetworks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#subnetworks GoogleComputePacketMirroring#subnetworks}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

All instances with these tags will be mirrored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#tags GoogleComputePacketMirroring#tags}

---

### GoogleComputePacketMirroringMirroredResourcesInstances <a name="GoogleComputePacketMirroringMirroredResourcesInstances" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstances.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePacketMirroringMirroredResourcesInstances {
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstances.property.url">Url</a></code> | <code>string</code> | The URL of the instances where this rule should be active. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstances.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The URL of the instances where this rule should be active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#url GoogleComputePacketMirroring#url}

---

### GoogleComputePacketMirroringMirroredResourcesSubnetworks <a name="GoogleComputePacketMirroringMirroredResourcesSubnetworks" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePacketMirroringMirroredResourcesSubnetworks {
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworks.property.url">Url</a></code> | <code>string</code> | The URL of the subnetwork where this rule should be active. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworks.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The URL of the subnetwork where this rule should be active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#url GoogleComputePacketMirroring#url}

---

### GoogleComputePacketMirroringNetwork <a name="GoogleComputePacketMirroringNetwork" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePacketMirroringNetwork {
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetwork.property.url">Url</a></code> | <code>string</code> | The full self_link URL of the network where this rule is active. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetwork.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The full self_link URL of the network where this rule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#url GoogleComputePacketMirroring#url}

---

### GoogleComputePacketMirroringTimeouts <a name="GoogleComputePacketMirroringTimeouts" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePacketMirroringTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#create GoogleComputePacketMirroring#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#delete GoogleComputePacketMirroring#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#update GoogleComputePacketMirroring#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#create GoogleComputePacketMirroring#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#delete GoogleComputePacketMirroring#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_packet_mirroring#update GoogleComputePacketMirroring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputePacketMirroringCollectorIlbOutputReference <a name="GoogleComputePacketMirroringCollectorIlbOutputReference" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePacketMirroringCollectorIlbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlb">GoogleComputePacketMirroringCollectorIlb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.property.internalValue"></a>

```csharp
public GoogleComputePacketMirroringCollectorIlb InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlb">GoogleComputePacketMirroringCollectorIlb</a>

---


### GoogleComputePacketMirroringFilterOutputReference <a name="GoogleComputePacketMirroringFilterOutputReference" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePacketMirroringFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.resetCidrRanges">ResetCidrRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.resetIpProtocols">ResetIpProtocols</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrRanges` <a name="ResetCidrRanges" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.resetCidrRanges"></a>

```csharp
private void ResetCidrRanges()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetIpProtocols` <a name="ResetIpProtocols" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.resetIpProtocols"></a>

```csharp
private void ResetIpProtocols()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.cidrRangesInput">CidrRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.ipProtocolsInput">IpProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.cidrRanges">CidrRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.ipProtocols">IpProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter">GoogleComputePacketMirroringFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrRangesInput`<sup>Optional</sup> <a name="CidrRangesInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.cidrRangesInput"></a>

```csharp
public string[] CidrRangesInput { get; }
```

- *Type:* string[]

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `IpProtocolsInput`<sup>Optional</sup> <a name="IpProtocolsInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.ipProtocolsInput"></a>

```csharp
public string[] IpProtocolsInput { get; }
```

- *Type:* string[]

---

##### `CidrRanges`<sup>Required</sup> <a name="CidrRanges" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.cidrRanges"></a>

```csharp
public string[] CidrRanges { get; }
```

- *Type:* string[]

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `IpProtocols`<sup>Required</sup> <a name="IpProtocols" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.ipProtocols"></a>

```csharp
public string[] IpProtocols { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.internalValue"></a>

```csharp
public GoogleComputePacketMirroringFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter">GoogleComputePacketMirroringFilter</a>

---


### GoogleComputePacketMirroringMirroredResourcesInstancesList <a name="GoogleComputePacketMirroringMirroredResourcesInstancesList" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePacketMirroringMirroredResourcesInstancesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.get"></a>

```csharp
private GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference <a name="GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputePacketMirroringMirroredResourcesOutputReference <a name="GoogleComputePacketMirroringMirroredResourcesOutputReference" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePacketMirroringMirroredResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.putInstances">PutInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.putSubnetworks">PutSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.resetInstances">ResetInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.resetSubnetworks">ResetSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInstances` <a name="PutInstances" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.putInstances"></a>

```csharp
private void PutInstances(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.putInstances.parameter.value"></a>

- *Type:* object

---

##### `PutSubnetworks` <a name="PutSubnetworks" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.putSubnetworks"></a>

```csharp
private void PutSubnetworks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.putSubnetworks.parameter.value"></a>

- *Type:* object

---

##### `ResetInstances` <a name="ResetInstances" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.resetInstances"></a>

```csharp
private void ResetInstances()
```

##### `ResetSubnetworks` <a name="ResetSubnetworks" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.resetSubnetworks"></a>

```csharp
private void ResetSubnetworks()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.instances">Instances</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList">GoogleComputePacketMirroringMirroredResourcesInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.subnetworks">Subnetworks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList">GoogleComputePacketMirroringMirroredResourcesSubnetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.instancesInput">InstancesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.subnetworksInput">SubnetworksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources">GoogleComputePacketMirroringMirroredResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.instances"></a>

```csharp
public GoogleComputePacketMirroringMirroredResourcesInstancesList Instances { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList">GoogleComputePacketMirroringMirroredResourcesInstancesList</a>

---

##### `Subnetworks`<sup>Required</sup> <a name="Subnetworks" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.subnetworks"></a>

```csharp
public GoogleComputePacketMirroringMirroredResourcesSubnetworksList Subnetworks { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList">GoogleComputePacketMirroringMirroredResourcesSubnetworksList</a>

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.instancesInput"></a>

```csharp
public object InstancesInput { get; }
```

- *Type:* object

---

##### `SubnetworksInput`<sup>Optional</sup> <a name="SubnetworksInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.subnetworksInput"></a>

```csharp
public object SubnetworksInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.internalValue"></a>

```csharp
public GoogleComputePacketMirroringMirroredResources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources">GoogleComputePacketMirroringMirroredResources</a>

---


### GoogleComputePacketMirroringMirroredResourcesSubnetworksList <a name="GoogleComputePacketMirroringMirroredResourcesSubnetworksList" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePacketMirroringMirroredResourcesSubnetworksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.get"></a>

```csharp
private GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference <a name="GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputePacketMirroringNetworkOutputReference <a name="GoogleComputePacketMirroringNetworkOutputReference" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePacketMirroringNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetwork">GoogleComputePacketMirroringNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.property.internalValue"></a>

```csharp
public GoogleComputePacketMirroringNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetwork">GoogleComputePacketMirroringNetwork</a>

---


### GoogleComputePacketMirroringTimeoutsOutputReference <a name="GoogleComputePacketMirroringTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePacketMirroringTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



