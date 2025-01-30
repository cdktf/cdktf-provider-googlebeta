# `googleComputeInstance` Submodule <a name="`googleComputeInstance` Submodule" id="@cdktf/provider-google-beta.googleComputeInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInstance <a name="GoogleComputeInstance" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance google_compute_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstance(Construct Scope, string Id, GoogleComputeInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig">GoogleComputeInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig">GoogleComputeInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putAdvancedMachineFeatures">PutAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putAttachedDisk">PutAttachedDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putBootDisk">PutBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putConfidentialInstanceConfig">PutConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putGuestAccelerator">PutGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putNetworkPerformanceConfig">PutNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putParams">PutParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putReservationAffinity">PutReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putScheduling">PutScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putScratchDisk">PutScratchDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putServiceAccount">PutServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putShieldedInstanceConfig">PutShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetAdvancedMachineFeatures">ResetAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetAllowStoppingForUpdate">ResetAllowStoppingForUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetAttachedDisk">ResetAttachedDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetCanIpForward">ResetCanIpForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetConfidentialInstanceConfig">ResetConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetDesiredStatus">ResetDesiredStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetEnableDisplay">ResetEnableDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetGuestAccelerator">ResetGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetKeyRevocationActionType">ResetKeyRevocationActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetMetadataStartupScript">ResetMetadataStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetMinCpuPlatform">ResetMinCpuPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetNetworkPerformanceConfig">ResetNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetPartnerMetadata">ResetPartnerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetReservationAffinity">ResetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetResourcePolicies">ResetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetScheduling">ResetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetScratchDisk">ResetScratchDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetShieldedInstanceConfig">ResetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvancedMachineFeatures` <a name="PutAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putAdvancedMachineFeatures"></a>

```csharp
private void PutAdvancedMachineFeatures(GoogleComputeInstanceAdvancedMachineFeatures Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putAdvancedMachineFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures">GoogleComputeInstanceAdvancedMachineFeatures</a>

---

##### `PutAttachedDisk` <a name="PutAttachedDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putAttachedDisk"></a>

```csharp
private void PutAttachedDisk(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putAttachedDisk.parameter.value"></a>

- *Type:* object

---

##### `PutBootDisk` <a name="PutBootDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putBootDisk"></a>

```csharp
private void PutBootDisk(GoogleComputeInstanceBootDisk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putBootDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk">GoogleComputeInstanceBootDisk</a>

---

##### `PutConfidentialInstanceConfig` <a name="PutConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putConfidentialInstanceConfig"></a>

```csharp
private void PutConfidentialInstanceConfig(GoogleComputeInstanceConfidentialInstanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putConfidentialInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig">GoogleComputeInstanceConfidentialInstanceConfig</a>

---

##### `PutGuestAccelerator` <a name="PutGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putGuestAccelerator"></a>

```csharp
private void PutGuestAccelerator(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putGuestAccelerator.parameter.value"></a>

- *Type:* object

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putNetworkInterface"></a>

```csharp
private void PutNetworkInterface(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putNetworkInterface.parameter.value"></a>

- *Type:* object

---

##### `PutNetworkPerformanceConfig` <a name="PutNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putNetworkPerformanceConfig"></a>

```csharp
private void PutNetworkPerformanceConfig(GoogleComputeInstanceNetworkPerformanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putNetworkPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfig">GoogleComputeInstanceNetworkPerformanceConfig</a>

---

##### `PutParams` <a name="PutParams" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putParams"></a>

```csharp
private void PutParams(GoogleComputeInstanceParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParams">GoogleComputeInstanceParams</a>

---

##### `PutReservationAffinity` <a name="PutReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putReservationAffinity"></a>

```csharp
private void PutReservationAffinity(GoogleComputeInstanceReservationAffinity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity">GoogleComputeInstanceReservationAffinity</a>

---

##### `PutScheduling` <a name="PutScheduling" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putScheduling"></a>

```csharp
private void PutScheduling(GoogleComputeInstanceScheduling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling">GoogleComputeInstanceScheduling</a>

---

##### `PutScratchDisk` <a name="PutScratchDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putScratchDisk"></a>

```csharp
private void PutScratchDisk(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putScratchDisk.parameter.value"></a>

- *Type:* object

---

##### `PutServiceAccount` <a name="PutServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putServiceAccount"></a>

```csharp
private void PutServiceAccount(GoogleComputeInstanceServiceAccount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount">GoogleComputeInstanceServiceAccount</a>

---

##### `PutShieldedInstanceConfig` <a name="PutShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putShieldedInstanceConfig"></a>

```csharp
private void PutShieldedInstanceConfig(GoogleComputeInstanceShieldedInstanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig">GoogleComputeInstanceShieldedInstanceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts">GoogleComputeInstanceTimeouts</a>

---

##### `ResetAdvancedMachineFeatures` <a name="ResetAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetAdvancedMachineFeatures"></a>

```csharp
private void ResetAdvancedMachineFeatures()
```

##### `ResetAllowStoppingForUpdate` <a name="ResetAllowStoppingForUpdate" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetAllowStoppingForUpdate"></a>

```csharp
private void ResetAllowStoppingForUpdate()
```

##### `ResetAttachedDisk` <a name="ResetAttachedDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetAttachedDisk"></a>

```csharp
private void ResetAttachedDisk()
```

##### `ResetCanIpForward` <a name="ResetCanIpForward" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetCanIpForward"></a>

```csharp
private void ResetCanIpForward()
```

##### `ResetConfidentialInstanceConfig` <a name="ResetConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetConfidentialInstanceConfig"></a>

```csharp
private void ResetConfidentialInstanceConfig()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDesiredStatus` <a name="ResetDesiredStatus" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetDesiredStatus"></a>

```csharp
private void ResetDesiredStatus()
```

##### `ResetEnableDisplay` <a name="ResetEnableDisplay" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetEnableDisplay"></a>

```csharp
private void ResetEnableDisplay()
```

##### `ResetGuestAccelerator` <a name="ResetGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetGuestAccelerator"></a>

```csharp
private void ResetGuestAccelerator()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetHostname"></a>

```csharp
private void ResetHostname()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyRevocationActionType` <a name="ResetKeyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetKeyRevocationActionType"></a>

```csharp
private void ResetKeyRevocationActionType()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetMetadataStartupScript` <a name="ResetMetadataStartupScript" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetMetadataStartupScript"></a>

```csharp
private void ResetMetadataStartupScript()
```

##### `ResetMinCpuPlatform` <a name="ResetMinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetMinCpuPlatform"></a>

```csharp
private void ResetMinCpuPlatform()
```

##### `ResetNetworkPerformanceConfig` <a name="ResetNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetNetworkPerformanceConfig"></a>

```csharp
private void ResetNetworkPerformanceConfig()
```

##### `ResetParams` <a name="ResetParams" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetParams"></a>

```csharp
private void ResetParams()
```

##### `ResetPartnerMetadata` <a name="ResetPartnerMetadata" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetPartnerMetadata"></a>

```csharp
private void ResetPartnerMetadata()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetReservationAffinity` <a name="ResetReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetReservationAffinity"></a>

```csharp
private void ResetReservationAffinity()
```

##### `ResetResourcePolicies` <a name="ResetResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetResourcePolicies"></a>

```csharp
private void ResetResourcePolicies()
```

##### `ResetScheduling` <a name="ResetScheduling" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetScheduling"></a>

```csharp
private void ResetScheduling()
```

##### `ResetScratchDisk` <a name="ResetScratchDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetScratchDisk"></a>

```csharp
private void ResetScratchDisk()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetShieldedInstanceConfig` <a name="ResetShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetShieldedInstanceConfig"></a>

```csharp
private void ResetShieldedInstanceConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.advancedMachineFeatures">AdvancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference">GoogleComputeInstanceAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.attachedDisk">AttachedDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList">GoogleComputeInstanceAttachedDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.bootDisk">BootDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference">GoogleComputeInstanceBootDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.confidentialInstanceConfig">ConfidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference">GoogleComputeInstanceConfidentialInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.cpuPlatform">CpuPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.currentStatus">CurrentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.guestAccelerator">GuestAccelerator</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList">GoogleComputeInstanceGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.labelFingerprint">LabelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.metadataFingerprint">MetadataFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList">GoogleComputeInstanceNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.networkPerformanceConfig">NetworkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference">GoogleComputeInstanceNetworkPerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.params">Params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference">GoogleComputeInstanceParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference">GoogleComputeInstanceReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference">GoogleComputeInstanceSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.scratchDisk">ScratchDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList">GoogleComputeInstanceScratchDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference">GoogleComputeInstanceServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference">GoogleComputeInstanceShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.tagsFingerprint">TagsFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference">GoogleComputeInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.advancedMachineFeaturesInput">AdvancedMachineFeaturesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures">GoogleComputeInstanceAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.allowStoppingForUpdateInput">AllowStoppingForUpdateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.attachedDiskInput">AttachedDiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.bootDiskInput">BootDiskInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk">GoogleComputeInstanceBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.canIpForwardInput">CanIpForwardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.confidentialInstanceConfigInput">ConfidentialInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig">GoogleComputeInstanceConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.desiredStatusInput">DesiredStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.enableDisplayInput">EnableDisplayInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.guestAcceleratorInput">GuestAcceleratorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.keyRevocationActionTypeInput">KeyRevocationActionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.metadataStartupScriptInput">MetadataStartupScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.minCpuPlatformInput">MinCpuPlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.networkPerformanceConfigInput">NetworkPerformanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfig">GoogleComputeInstanceNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.paramsInput">ParamsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParams">GoogleComputeInstanceParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.partnerMetadataInput">PartnerMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.reservationAffinityInput">ReservationAffinityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity">GoogleComputeInstanceReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.resourcePoliciesInput">ResourcePoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.schedulingInput">SchedulingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling">GoogleComputeInstanceScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.scratchDiskInput">ScratchDiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.serviceAccountInput">ServiceAccountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount">GoogleComputeInstanceServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.shieldedInstanceConfigInput">ShieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig">GoogleComputeInstanceShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.allowStoppingForUpdate">AllowStoppingForUpdate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.canIpForward">CanIpForward</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.desiredStatus">DesiredStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.enableDisplay">EnableDisplay</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.keyRevocationActionType">KeyRevocationActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.metadataStartupScript">MetadataStartupScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.partnerMetadata">PartnerMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.resourcePolicies">ResourcePolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdvancedMachineFeatures`<sup>Required</sup> <a name="AdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.advancedMachineFeatures"></a>

```csharp
public GoogleComputeInstanceAdvancedMachineFeaturesOutputReference AdvancedMachineFeatures { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference">GoogleComputeInstanceAdvancedMachineFeaturesOutputReference</a>

---

##### `AttachedDisk`<sup>Required</sup> <a name="AttachedDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.attachedDisk"></a>

```csharp
public GoogleComputeInstanceAttachedDiskList AttachedDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList">GoogleComputeInstanceAttachedDiskList</a>

---

##### `BootDisk`<sup>Required</sup> <a name="BootDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.bootDisk"></a>

```csharp
public GoogleComputeInstanceBootDiskOutputReference BootDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference">GoogleComputeInstanceBootDiskOutputReference</a>

---

##### `ConfidentialInstanceConfig`<sup>Required</sup> <a name="ConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.confidentialInstanceConfig"></a>

```csharp
public GoogleComputeInstanceConfidentialInstanceConfigOutputReference ConfidentialInstanceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference">GoogleComputeInstanceConfidentialInstanceConfigOutputReference</a>

---

##### `CpuPlatform`<sup>Required</sup> <a name="CpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.cpuPlatform"></a>

```csharp
public string CpuPlatform { get; }
```

- *Type:* string

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `CurrentStatus`<sup>Required</sup> <a name="CurrentStatus" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.currentStatus"></a>

```csharp
public string CurrentStatus { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `GuestAccelerator`<sup>Required</sup> <a name="GuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.guestAccelerator"></a>

```csharp
public GoogleComputeInstanceGuestAcceleratorList GuestAccelerator { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList">GoogleComputeInstanceGuestAcceleratorList</a>

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.labelFingerprint"></a>

```csharp
public string LabelFingerprint { get; }
```

- *Type:* string

---

##### `MetadataFingerprint`<sup>Required</sup> <a name="MetadataFingerprint" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.metadataFingerprint"></a>

```csharp
public string MetadataFingerprint { get; }
```

- *Type:* string

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.networkInterface"></a>

```csharp
public GoogleComputeInstanceNetworkInterfaceList NetworkInterface { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList">GoogleComputeInstanceNetworkInterfaceList</a>

---

##### `NetworkPerformanceConfig`<sup>Required</sup> <a name="NetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.networkPerformanceConfig"></a>

```csharp
public GoogleComputeInstanceNetworkPerformanceConfigOutputReference NetworkPerformanceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference">GoogleComputeInstanceNetworkPerformanceConfigOutputReference</a>

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.params"></a>

```csharp
public GoogleComputeInstanceParamsOutputReference Params { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference">GoogleComputeInstanceParamsOutputReference</a>

---

##### `ReservationAffinity`<sup>Required</sup> <a name="ReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.reservationAffinity"></a>

```csharp
public GoogleComputeInstanceReservationAffinityOutputReference ReservationAffinity { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference">GoogleComputeInstanceReservationAffinityOutputReference</a>

---

##### `Scheduling`<sup>Required</sup> <a name="Scheduling" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.scheduling"></a>

```csharp
public GoogleComputeInstanceSchedulingOutputReference Scheduling { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference">GoogleComputeInstanceSchedulingOutputReference</a>

---

##### `ScratchDisk`<sup>Required</sup> <a name="ScratchDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.scratchDisk"></a>

```csharp
public GoogleComputeInstanceScratchDiskList ScratchDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList">GoogleComputeInstanceScratchDiskList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.serviceAccount"></a>

```csharp
public GoogleComputeInstanceServiceAccountOutputReference ServiceAccount { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference">GoogleComputeInstanceServiceAccountOutputReference</a>

---

##### `ShieldedInstanceConfig`<sup>Required</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.shieldedInstanceConfig"></a>

```csharp
public GoogleComputeInstanceShieldedInstanceConfigOutputReference ShieldedInstanceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference">GoogleComputeInstanceShieldedInstanceConfigOutputReference</a>

---

##### `TagsFingerprint`<sup>Required</sup> <a name="TagsFingerprint" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.tagsFingerprint"></a>

```csharp
public string TagsFingerprint { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.timeouts"></a>

```csharp
public GoogleComputeInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference">GoogleComputeInstanceTimeoutsOutputReference</a>

---

##### `AdvancedMachineFeaturesInput`<sup>Optional</sup> <a name="AdvancedMachineFeaturesInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.advancedMachineFeaturesInput"></a>

```csharp
public GoogleComputeInstanceAdvancedMachineFeatures AdvancedMachineFeaturesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures">GoogleComputeInstanceAdvancedMachineFeatures</a>

---

##### `AllowStoppingForUpdateInput`<sup>Optional</sup> <a name="AllowStoppingForUpdateInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.allowStoppingForUpdateInput"></a>

```csharp
public object AllowStoppingForUpdateInput { get; }
```

- *Type:* object

---

##### `AttachedDiskInput`<sup>Optional</sup> <a name="AttachedDiskInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.attachedDiskInput"></a>

```csharp
public object AttachedDiskInput { get; }
```

- *Type:* object

---

##### `BootDiskInput`<sup>Optional</sup> <a name="BootDiskInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.bootDiskInput"></a>

```csharp
public GoogleComputeInstanceBootDisk BootDiskInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk">GoogleComputeInstanceBootDisk</a>

---

##### `CanIpForwardInput`<sup>Optional</sup> <a name="CanIpForwardInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.canIpForwardInput"></a>

```csharp
public object CanIpForwardInput { get; }
```

- *Type:* object

---

##### `ConfidentialInstanceConfigInput`<sup>Optional</sup> <a name="ConfidentialInstanceConfigInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.confidentialInstanceConfigInput"></a>

```csharp
public GoogleComputeInstanceConfidentialInstanceConfig ConfidentialInstanceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig">GoogleComputeInstanceConfidentialInstanceConfig</a>

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.deletionProtectionInput"></a>

```csharp
public object DeletionProtectionInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DesiredStatusInput`<sup>Optional</sup> <a name="DesiredStatusInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.desiredStatusInput"></a>

```csharp
public string DesiredStatusInput { get; }
```

- *Type:* string

---

##### `EnableDisplayInput`<sup>Optional</sup> <a name="EnableDisplayInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.enableDisplayInput"></a>

```csharp
public object EnableDisplayInput { get; }
```

- *Type:* object

---

##### `GuestAcceleratorInput`<sup>Optional</sup> <a name="GuestAcceleratorInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.guestAcceleratorInput"></a>

```csharp
public object GuestAcceleratorInput { get; }
```

- *Type:* object

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyRevocationActionTypeInput`<sup>Optional</sup> <a name="KeyRevocationActionTypeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.keyRevocationActionTypeInput"></a>

```csharp
public string KeyRevocationActionTypeInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MetadataStartupScriptInput`<sup>Optional</sup> <a name="MetadataStartupScriptInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.metadataStartupScriptInput"></a>

```csharp
public string MetadataStartupScriptInput { get; }
```

- *Type:* string

---

##### `MinCpuPlatformInput`<sup>Optional</sup> <a name="MinCpuPlatformInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.minCpuPlatformInput"></a>

```csharp
public string MinCpuPlatformInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.networkInterfaceInput"></a>

```csharp
public object NetworkInterfaceInput { get; }
```

- *Type:* object

---

##### `NetworkPerformanceConfigInput`<sup>Optional</sup> <a name="NetworkPerformanceConfigInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.networkPerformanceConfigInput"></a>

```csharp
public GoogleComputeInstanceNetworkPerformanceConfig NetworkPerformanceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfig">GoogleComputeInstanceNetworkPerformanceConfig</a>

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.paramsInput"></a>

```csharp
public GoogleComputeInstanceParams ParamsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParams">GoogleComputeInstanceParams</a>

---

##### `PartnerMetadataInput`<sup>Optional</sup> <a name="PartnerMetadataInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.partnerMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PartnerMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReservationAffinityInput`<sup>Optional</sup> <a name="ReservationAffinityInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.reservationAffinityInput"></a>

```csharp
public GoogleComputeInstanceReservationAffinity ReservationAffinityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity">GoogleComputeInstanceReservationAffinity</a>

---

##### `ResourcePoliciesInput`<sup>Optional</sup> <a name="ResourcePoliciesInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.resourcePoliciesInput"></a>

```csharp
public string[] ResourcePoliciesInput { get; }
```

- *Type:* string[]

---

##### `SchedulingInput`<sup>Optional</sup> <a name="SchedulingInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.schedulingInput"></a>

```csharp
public GoogleComputeInstanceScheduling SchedulingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling">GoogleComputeInstanceScheduling</a>

---

##### `ScratchDiskInput`<sup>Optional</sup> <a name="ScratchDiskInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.scratchDiskInput"></a>

```csharp
public object ScratchDiskInput { get; }
```

- *Type:* object

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.serviceAccountInput"></a>

```csharp
public GoogleComputeInstanceServiceAccount ServiceAccountInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount">GoogleComputeInstanceServiceAccount</a>

---

##### `ShieldedInstanceConfigInput`<sup>Optional</sup> <a name="ShieldedInstanceConfigInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.shieldedInstanceConfigInput"></a>

```csharp
public GoogleComputeInstanceShieldedInstanceConfig ShieldedInstanceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig">GoogleComputeInstanceShieldedInstanceConfig</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `AllowStoppingForUpdate`<sup>Required</sup> <a name="AllowStoppingForUpdate" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.allowStoppingForUpdate"></a>

```csharp
public object AllowStoppingForUpdate { get; }
```

- *Type:* object

---

##### `CanIpForward`<sup>Required</sup> <a name="CanIpForward" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.canIpForward"></a>

```csharp
public object CanIpForward { get; }
```

- *Type:* object

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DesiredStatus`<sup>Required</sup> <a name="DesiredStatus" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.desiredStatus"></a>

```csharp
public string DesiredStatus { get; }
```

- *Type:* string

---

##### `EnableDisplay`<sup>Required</sup> <a name="EnableDisplay" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.enableDisplay"></a>

```csharp
public object EnableDisplay { get; }
```

- *Type:* object

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyRevocationActionType`<sup>Required</sup> <a name="KeyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.keyRevocationActionType"></a>

```csharp
public string KeyRevocationActionType { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MetadataStartupScript`<sup>Required</sup> <a name="MetadataStartupScript" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.metadataStartupScript"></a>

```csharp
public string MetadataStartupScript { get; }
```

- *Type:* string

---

##### `MinCpuPlatform`<sup>Required</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.minCpuPlatform"></a>

```csharp
public string MinCpuPlatform { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartnerMetadata`<sup>Required</sup> <a name="PartnerMetadata" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.partnerMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PartnerMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ResourcePolicies`<sup>Required</sup> <a name="ResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.resourcePolicies"></a>

```csharp
public string[] ResourcePolicies { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInstanceAdvancedMachineFeatures <a name="GoogleComputeInstanceAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceAdvancedMachineFeatures {
    object EnableNestedVirtualization = null,
    object EnableUefiNetworking = null,
    string PerformanceMonitoringUnit = null,
    double ThreadsPerCore = null,
    string TurboMode = null,
    double VisibleCoreCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>object</code> | Whether to enable nested virtualization or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.enableUefiNetworking">EnableUefiNetworking</a></code> | <code>object</code> | Whether to enable UEFI networking for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.performanceMonitoringUnit">PerformanceMonitoringUnit</a></code> | <code>string</code> | The PMU is a hardware component within the CPU core that monitors how the processor runs code. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.threadsPerCore">ThreadsPerCore</a></code> | <code>double</code> | The number of threads per physical core. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.turboMode">TurboMode</a></code> | <code>string</code> | Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.visibleCoreCount">VisibleCoreCount</a></code> | <code>double</code> | The number of physical cores to expose to an instance. |

---

##### `EnableNestedVirtualization`<sup>Optional</sup> <a name="EnableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.enableNestedVirtualization"></a>

```csharp
public object EnableNestedVirtualization { get; set; }
```

- *Type:* object

Whether to enable nested virtualization or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#enable_nested_virtualization GoogleComputeInstance#enable_nested_virtualization}

---

##### `EnableUefiNetworking`<sup>Optional</sup> <a name="EnableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.enableUefiNetworking"></a>

```csharp
public object EnableUefiNetworking { get; set; }
```

- *Type:* object

Whether to enable UEFI networking for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#enable_uefi_networking GoogleComputeInstance#enable_uefi_networking}

---

##### `PerformanceMonitoringUnit`<sup>Optional</sup> <a name="PerformanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.performanceMonitoringUnit"></a>

```csharp
public string PerformanceMonitoringUnit { get; set; }
```

- *Type:* string

The PMU is a hardware component within the CPU core that monitors how the processor runs code.

Valid values for the level of PMU are "STANDARD", "ENHANCED", and "ARCHITECTURAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#performance_monitoring_unit GoogleComputeInstance#performance_monitoring_unit}

---

##### `ThreadsPerCore`<sup>Optional</sup> <a name="ThreadsPerCore" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.threadsPerCore"></a>

```csharp
public double ThreadsPerCore { get; set; }
```

- *Type:* double

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#threads_per_core GoogleComputeInstance#threads_per_core}

---

##### `TurboMode`<sup>Optional</sup> <a name="TurboMode" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.turboMode"></a>

```csharp
public string TurboMode { get; set; }
```

- *Type:* string

Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#turbo_mode GoogleComputeInstance#turbo_mode}

---

##### `VisibleCoreCount`<sup>Optional</sup> <a name="VisibleCoreCount" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures.property.visibleCoreCount"></a>

```csharp
public double VisibleCoreCount { get; set; }
```

- *Type:* double

The number of physical cores to expose to an instance.

Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance's nominal CPU count and the underlying platform's SMT width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#visible_core_count GoogleComputeInstance#visible_core_count}

---

### GoogleComputeInstanceAttachedDisk <a name="GoogleComputeInstanceAttachedDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceAttachedDisk {
    string Source,
    string DeviceName = null,
    string DiskEncryptionKeyRaw = null,
    string KmsKeySelfLink = null,
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk.property.source">Source</a></code> | <code>string</code> | The name or self_link of the disk attached to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk.property.deviceName">DeviceName</a></code> | <code>string</code> | Name with which the attached disk is accessible under /dev/disk/by-id/. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk.property.diskEncryptionKeyRaw">DiskEncryptionKeyRaw</a></code> | <code>string</code> | A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk.property.mode">Mode</a></code> | <code>string</code> | Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE". |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

The name or self_link of the disk attached to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#source GoogleComputeInstance#source}

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

Name with which the attached disk is accessible under /dev/disk/by-id/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#device_name GoogleComputeInstance#device_name}

---

##### `DiskEncryptionKeyRaw`<sup>Optional</sup> <a name="DiskEncryptionKeyRaw" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk.property.diskEncryptionKeyRaw"></a>

```csharp
public string DiskEncryptionKeyRaw { get; set; }
```

- *Type:* string

A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk.

Only one of kms_key_self_link and disk_encryption_key_raw may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#disk_encryption_key_raw GoogleComputeInstance#disk_encryption_key_raw}

---

##### `KmsKeySelfLink`<sup>Optional</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; set; }
```

- *Type:* string

The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk.

Only one of kms_key_self_link and disk_encryption_key_raw may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#kms_key_self_link GoogleComputeInstance#kms_key_self_link}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDisk.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#mode GoogleComputeInstance#mode}

---

### GoogleComputeInstanceBootDisk <a name="GoogleComputeInstanceBootDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceBootDisk {
    object AutoDelete = null,
    string DeviceName = null,
    string DiskEncryptionKeyRaw = null,
    GoogleComputeInstanceBootDiskInitializeParams InitializeParams = null,
    string Interface = null,
    string KmsKeySelfLink = null,
    string Mode = null,
    string Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.autoDelete">AutoDelete</a></code> | <code>object</code> | Whether the disk will be auto-deleted when the instance is deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.deviceName">DeviceName</a></code> | <code>string</code> | Name with which attached disk will be accessible under /dev/disk/by-id/. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.diskEncryptionKeyRaw">DiskEncryptionKeyRaw</a></code> | <code>string</code> | A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.initializeParams">InitializeParams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams">GoogleComputeInstanceBootDiskInitializeParams</a></code> | initialize_params block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.interface">Interface</a></code> | <code>string</code> | The disk interface used for attaching this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.mode">Mode</a></code> | <code>string</code> | Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.source">Source</a></code> | <code>string</code> | The name or self_link of the disk attached to this instance. |

---

##### `AutoDelete`<sup>Optional</sup> <a name="AutoDelete" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.autoDelete"></a>

```csharp
public object AutoDelete { get; set; }
```

- *Type:* object

Whether the disk will be auto-deleted when the instance is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#auto_delete GoogleComputeInstance#auto_delete}

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

Name with which attached disk will be accessible under /dev/disk/by-id/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#device_name GoogleComputeInstance#device_name}

---

##### `DiskEncryptionKeyRaw`<sup>Optional</sup> <a name="DiskEncryptionKeyRaw" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.diskEncryptionKeyRaw"></a>

```csharp
public string DiskEncryptionKeyRaw { get; set; }
```

- *Type:* string

A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk.

Only one of kms_key_self_link and disk_encryption_key_raw may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#disk_encryption_key_raw GoogleComputeInstance#disk_encryption_key_raw}

---

##### `InitializeParams`<sup>Optional</sup> <a name="InitializeParams" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.initializeParams"></a>

```csharp
public GoogleComputeInstanceBootDiskInitializeParams InitializeParams { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams">GoogleComputeInstanceBootDiskInitializeParams</a>

initialize_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#initialize_params GoogleComputeInstance#initialize_params}

---

##### `Interface`<sup>Optional</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.interface"></a>

```csharp
public string Interface { get; set; }
```

- *Type:* string

The disk interface used for attaching this disk.

One of SCSI or NVME. (This field is shared with attached_disk and only used for specific cases, please don't specify this field without advice from Google.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#interface GoogleComputeInstance#interface}

---

##### `KmsKeySelfLink`<sup>Optional</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; set; }
```

- *Type:* string

The self_link of the encryption key that is stored in Google Cloud KMS to encrypt this disk.

Only one of kms_key_self_link and disk_encryption_key_raw may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#kms_key_self_link GoogleComputeInstance#kms_key_self_link}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#mode GoogleComputeInstance#mode}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

The name or self_link of the disk attached to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#source GoogleComputeInstance#source}

---

### GoogleComputeInstanceBootDiskInitializeParams <a name="GoogleComputeInstanceBootDiskInitializeParams" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceBootDiskInitializeParams {
    object EnableConfidentialCompute = null,
    string Image = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    double ProvisionedIops = null,
    double ProvisionedThroughput = null,
    System.Collections.Generic.IDictionary<string, string> ResourceManagerTags = null,
    string[] ResourcePolicies = null,
    double Size = null,
    string StoragePool = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>object</code> | A flag to enable confidential compute mode on boot disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.image">Image</a></code> | <code>string</code> | The image from which this disk was initialised. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A set of key/value label pairs assigned to the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.provisionedIops">ProvisionedIops</a></code> | <code>double</code> | Indicates how many IOPS to provision for the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code>double</code> | Indicates how much throughput to provision for the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.resourcePolicies">ResourcePolicies</a></code> | <code>string[]</code> | A list of self_links of resource policies to attach to the instance's boot disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.size">Size</a></code> | <code>double</code> | The size of the image in gigabytes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.storagePool">StoragePool</a></code> | <code>string</code> | The URL of the storage pool in which the new disk is created. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.type">Type</a></code> | <code>string</code> | The Google Compute Engine disk type. Such as pd-standard, pd-ssd or pd-balanced. |

---

##### `EnableConfidentialCompute`<sup>Optional</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.enableConfidentialCompute"></a>

```csharp
public object EnableConfidentialCompute { get; set; }
```

- *Type:* object

A flag to enable confidential compute mode on boot disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#enable_confidential_compute GoogleComputeInstance#enable_confidential_compute}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

The image from which this disk was initialised.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#image GoogleComputeInstance#image}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A set of key/value label pairs assigned to the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#labels GoogleComputeInstance#labels}

---

##### `ProvisionedIops`<sup>Optional</sup> <a name="ProvisionedIops" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.provisionedIops"></a>

```csharp
public double ProvisionedIops { get; set; }
```

- *Type:* double

Indicates how many IOPS to provision for the disk.

This sets the number of I/O operations per second that the disk can handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#provisioned_iops GoogleComputeInstance#provisioned_iops}

---

##### `ProvisionedThroughput`<sup>Optional</sup> <a name="ProvisionedThroughput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.provisionedThroughput"></a>

```csharp
public double ProvisionedThroughput { get; set; }
```

- *Type:* double

Indicates how much throughput to provision for the disk.

This sets the number of throughput mb per second that the disk can handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#provisioned_throughput GoogleComputeInstance#provisioned_throughput}

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#resource_manager_tags GoogleComputeInstance#resource_manager_tags}

---

##### `ResourcePolicies`<sup>Optional</sup> <a name="ResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.resourcePolicies"></a>

```csharp
public string[] ResourcePolicies { get; set; }
```

- *Type:* string[]

A list of self_links of resource policies to attach to the instance's boot disk.

Modifying this list will cause the instance to recreate. Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#resource_policies GoogleComputeInstance#resource_policies}

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

The size of the image in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#size GoogleComputeInstance#size}

---

##### `StoragePool`<sup>Optional</sup> <a name="StoragePool" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.storagePool"></a>

```csharp
public string StoragePool { get; set; }
```

- *Type:* string

The URL of the storage pool in which the new disk is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#storage_pool GoogleComputeInstance#storage_pool}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The Google Compute Engine disk type. Such as pd-standard, pd-ssd or pd-balanced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#type GoogleComputeInstance#type}

---

### GoogleComputeInstanceConfidentialInstanceConfig <a name="GoogleComputeInstanceConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceConfidentialInstanceConfig {
    string ConfidentialInstanceType = null,
    object EnableConfidentialCompute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig.property.confidentialInstanceType">ConfidentialInstanceType</a></code> | <code>string</code> | The confidential computing technology the instance uses. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>object</code> | Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release. |

---

##### `ConfidentialInstanceType`<sup>Optional</sup> <a name="ConfidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig.property.confidentialInstanceType"></a>

```csharp
public string ConfidentialInstanceType { get; set; }
```

- *Type:* string

The confidential computing technology the instance uses.

SEV is an AMD feature. TDX is an Intel feature. One of the following
values is required: SEV, SEV_SNP, TDX. If SEV_SNP, min_cpu_platform =
"AMD Milan" is currently required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#confidential_instance_type GoogleComputeInstance#confidential_instance_type}

---

##### `EnableConfidentialCompute`<sup>Optional</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig.property.enableConfidentialCompute"></a>

```csharp
public object EnableConfidentialCompute { get; set; }
```

- *Type:* object

Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#enable_confidential_compute GoogleComputeInstance#enable_confidential_compute}

---

### GoogleComputeInstanceConfig <a name="GoogleComputeInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleComputeInstanceBootDisk BootDisk,
    string MachineType,
    string Name,
    object NetworkInterface,
    GoogleComputeInstanceAdvancedMachineFeatures AdvancedMachineFeatures = null,
    object AllowStoppingForUpdate = null,
    object AttachedDisk = null,
    object CanIpForward = null,
    GoogleComputeInstanceConfidentialInstanceConfig ConfidentialInstanceConfig = null,
    object DeletionProtection = null,
    string Description = null,
    string DesiredStatus = null,
    object EnableDisplay = null,
    object GuestAccelerator = null,
    string Hostname = null,
    string Id = null,
    string KeyRevocationActionType = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    string MetadataStartupScript = null,
    string MinCpuPlatform = null,
    GoogleComputeInstanceNetworkPerformanceConfig NetworkPerformanceConfig = null,
    GoogleComputeInstanceParams Params = null,
    System.Collections.Generic.IDictionary<string, string> PartnerMetadata = null,
    string Project = null,
    GoogleComputeInstanceReservationAffinity ReservationAffinity = null,
    string[] ResourcePolicies = null,
    GoogleComputeInstanceScheduling Scheduling = null,
    object ScratchDisk = null,
    GoogleComputeInstanceServiceAccount ServiceAccount = null,
    GoogleComputeInstanceShieldedInstanceConfig ShieldedInstanceConfig = null,
    string[] Tags = null,
    GoogleComputeInstanceTimeouts Timeouts = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.bootDisk">BootDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk">GoogleComputeInstanceBootDisk</a></code> | boot_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.machineType">MachineType</a></code> | <code>string</code> | The machine type to create. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.name">Name</a></code> | <code>string</code> | The name of the instance. One of name or self_link must be provided. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.networkInterface">NetworkInterface</a></code> | <code>object</code> | network_interface block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.advancedMachineFeatures">AdvancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures">GoogleComputeInstanceAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.allowStoppingForUpdate">AllowStoppingForUpdate</a></code> | <code>object</code> | If true, allows Terraform to stop the instance to update its properties. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.attachedDisk">AttachedDisk</a></code> | <code>object</code> | attached_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.canIpForward">CanIpForward</a></code> | <code>object</code> | Whether sending and receiving of packets with non-matching source or destination IPs is allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.confidentialInstanceConfig">ConfidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig">GoogleComputeInstanceConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | Whether deletion protection is enabled on this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.description">Description</a></code> | <code>string</code> | A brief description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.desiredStatus">DesiredStatus</a></code> | <code>string</code> | Desired status of the instance. Either "RUNNING", "SUSPENDED" or "TERMINATED". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.enableDisplay">EnableDisplay</a></code> | <code>object</code> | Whether the instance has virtual displays enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.guestAccelerator">GuestAccelerator</a></code> | <code>object</code> | guest_accelerator block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.hostname">Hostname</a></code> | <code>string</code> | A custom hostname for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#id GoogleComputeInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.keyRevocationActionType">KeyRevocationActionType</a></code> | <code>string</code> | Action to be taken when a customer's encryption key is revoked. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A set of key/value label pairs assigned to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Metadata key/value pairs made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.metadataStartupScript">MetadataStartupScript</a></code> | <code>string</code> | Metadata startup scripts made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>string</code> | The minimum CPU platform specified for the VM instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.networkPerformanceConfig">NetworkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfig">GoogleComputeInstanceNetworkPerformanceConfig</a></code> | network_performance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.params">Params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParams">GoogleComputeInstanceParams</a></code> | params block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.partnerMetadata">PartnerMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Partner Metadata Map made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity">GoogleComputeInstanceReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.resourcePolicies">ResourcePolicies</a></code> | <code>string[]</code> | A list of self_links of resource policies to attach to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling">GoogleComputeInstanceScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.scratchDisk">ScratchDisk</a></code> | <code>object</code> | scratch_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount">GoogleComputeInstanceServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig">GoogleComputeInstanceShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.tags">Tags</a></code> | <code>string[]</code> | The list of tags attached to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts">GoogleComputeInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.zone">Zone</a></code> | <code>string</code> | The zone of the instance. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BootDisk`<sup>Required</sup> <a name="BootDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.bootDisk"></a>

```csharp
public GoogleComputeInstanceBootDisk BootDisk { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk">GoogleComputeInstanceBootDisk</a>

boot_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#boot_disk GoogleComputeInstance#boot_disk}

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

The machine type to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#machine_type GoogleComputeInstance#machine_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the instance. One of name or self_link must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#name GoogleComputeInstance#name}

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.networkInterface"></a>

```csharp
public object NetworkInterface { get; set; }
```

- *Type:* object

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#network_interface GoogleComputeInstance#network_interface}

---

##### `AdvancedMachineFeatures`<sup>Optional</sup> <a name="AdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.advancedMachineFeatures"></a>

```csharp
public GoogleComputeInstanceAdvancedMachineFeatures AdvancedMachineFeatures { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures">GoogleComputeInstanceAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#advanced_machine_features GoogleComputeInstance#advanced_machine_features}

---

##### `AllowStoppingForUpdate`<sup>Optional</sup> <a name="AllowStoppingForUpdate" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.allowStoppingForUpdate"></a>

```csharp
public object AllowStoppingForUpdate { get; set; }
```

- *Type:* object

If true, allows Terraform to stop the instance to update its properties.

If you try to update a property that requires stopping the instance without setting this field, the update will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#allow_stopping_for_update GoogleComputeInstance#allow_stopping_for_update}

---

##### `AttachedDisk`<sup>Optional</sup> <a name="AttachedDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.attachedDisk"></a>

```csharp
public object AttachedDisk { get; set; }
```

- *Type:* object

attached_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#attached_disk GoogleComputeInstance#attached_disk}

---

##### `CanIpForward`<sup>Optional</sup> <a name="CanIpForward" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.canIpForward"></a>

```csharp
public object CanIpForward { get; set; }
```

- *Type:* object

Whether sending and receiving of packets with non-matching source or destination IPs is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#can_ip_forward GoogleComputeInstance#can_ip_forward}

---

##### `ConfidentialInstanceConfig`<sup>Optional</sup> <a name="ConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.confidentialInstanceConfig"></a>

```csharp
public GoogleComputeInstanceConfidentialInstanceConfig ConfidentialInstanceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig">GoogleComputeInstanceConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#confidential_instance_config GoogleComputeInstance#confidential_instance_config}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; set; }
```

- *Type:* object

Whether deletion protection is enabled on this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#deletion_protection GoogleComputeInstance#deletion_protection}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A brief description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#description GoogleComputeInstance#description}

---

##### `DesiredStatus`<sup>Optional</sup> <a name="DesiredStatus" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.desiredStatus"></a>

```csharp
public string DesiredStatus { get; set; }
```

- *Type:* string

Desired status of the instance. Either "RUNNING", "SUSPENDED" or "TERMINATED".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#desired_status GoogleComputeInstance#desired_status}

---

##### `EnableDisplay`<sup>Optional</sup> <a name="EnableDisplay" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.enableDisplay"></a>

```csharp
public object EnableDisplay { get; set; }
```

- *Type:* object

Whether the instance has virtual displays enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#enable_display GoogleComputeInstance#enable_display}

---

##### `GuestAccelerator`<sup>Optional</sup> <a name="GuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.guestAccelerator"></a>

```csharp
public object GuestAccelerator { get; set; }
```

- *Type:* object

guest_accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#guest_accelerator GoogleComputeInstance#guest_accelerator}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

A custom hostname for the instance.

Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of labels 1-63 characters long matching the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D), concatenated with periods. The entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#hostname GoogleComputeInstance#hostname}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#id GoogleComputeInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyRevocationActionType`<sup>Optional</sup> <a name="KeyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.keyRevocationActionType"></a>

```csharp
public string KeyRevocationActionType { get; set; }
```

- *Type:* string

Action to be taken when a customer's encryption key is revoked.

Supports "STOP" and "NONE", with "NONE" being the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#key_revocation_action_type GoogleComputeInstance#key_revocation_action_type}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A set of key/value label pairs assigned to the instance.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#labels GoogleComputeInstance#labels}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Metadata key/value pairs made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#metadata GoogleComputeInstance#metadata}

---

##### `MetadataStartupScript`<sup>Optional</sup> <a name="MetadataStartupScript" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.metadataStartupScript"></a>

```csharp
public string MetadataStartupScript { get; set; }
```

- *Type:* string

Metadata startup scripts made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#metadata_startup_script GoogleComputeInstance#metadata_startup_script}

---

##### `MinCpuPlatform`<sup>Optional</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.minCpuPlatform"></a>

```csharp
public string MinCpuPlatform { get; set; }
```

- *Type:* string

The minimum CPU platform specified for the VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#min_cpu_platform GoogleComputeInstance#min_cpu_platform}

---

##### `NetworkPerformanceConfig`<sup>Optional</sup> <a name="NetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.networkPerformanceConfig"></a>

```csharp
public GoogleComputeInstanceNetworkPerformanceConfig NetworkPerformanceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfig">GoogleComputeInstanceNetworkPerformanceConfig</a>

network_performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#network_performance_config GoogleComputeInstance#network_performance_config}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.params"></a>

```csharp
public GoogleComputeInstanceParams Params { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParams">GoogleComputeInstanceParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#params GoogleComputeInstance#params}

---

##### `PartnerMetadata`<sup>Optional</sup> <a name="PartnerMetadata" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.partnerMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PartnerMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Partner Metadata Map made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#partner_metadata GoogleComputeInstance#partner_metadata}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If self_link is provided, this value is ignored. If neither self_link nor project are provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#project GoogleComputeInstance#project}

---

##### `ReservationAffinity`<sup>Optional</sup> <a name="ReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.reservationAffinity"></a>

```csharp
public GoogleComputeInstanceReservationAffinity ReservationAffinity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity">GoogleComputeInstanceReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#reservation_affinity GoogleComputeInstance#reservation_affinity}

---

##### `ResourcePolicies`<sup>Optional</sup> <a name="ResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.resourcePolicies"></a>

```csharp
public string[] ResourcePolicies { get; set; }
```

- *Type:* string[]

A list of self_links of resource policies to attach to the instance.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#resource_policies GoogleComputeInstance#resource_policies}

---

##### `Scheduling`<sup>Optional</sup> <a name="Scheduling" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.scheduling"></a>

```csharp
public GoogleComputeInstanceScheduling Scheduling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling">GoogleComputeInstanceScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#scheduling GoogleComputeInstance#scheduling}

---

##### `ScratchDisk`<sup>Optional</sup> <a name="ScratchDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.scratchDisk"></a>

```csharp
public object ScratchDisk { get; set; }
```

- *Type:* object

scratch_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#scratch_disk GoogleComputeInstance#scratch_disk}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.serviceAccount"></a>

```csharp
public GoogleComputeInstanceServiceAccount ServiceAccount { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount">GoogleComputeInstanceServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#service_account GoogleComputeInstance#service_account}

---

##### `ShieldedInstanceConfig`<sup>Optional</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.shieldedInstanceConfig"></a>

```csharp
public GoogleComputeInstanceShieldedInstanceConfig ShieldedInstanceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig">GoogleComputeInstanceShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#shielded_instance_config GoogleComputeInstance#shielded_instance_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

The list of tags attached to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#tags GoogleComputeInstance#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.timeouts"></a>

```csharp
public GoogleComputeInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts">GoogleComputeInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#timeouts GoogleComputeInstance#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

The zone of the instance.

If self_link is provided, this value is ignored. If neither self_link nor zone are provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#zone GoogleComputeInstance#zone}

---

### GoogleComputeInstanceGuestAccelerator <a name="GoogleComputeInstanceGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAccelerator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGuestAccelerator {
    double Count,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAccelerator.property.count">Count</a></code> | <code>double</code> | The number of the guest accelerator cards exposed to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAccelerator.property.type">Type</a></code> | <code>string</code> | The accelerator type resource exposed to this instance. E.g. nvidia-tesla-k80. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAccelerator.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

The number of the guest accelerator cards exposed to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#count GoogleComputeInstance#count}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAccelerator.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The accelerator type resource exposed to this instance. E.g. nvidia-tesla-k80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#type GoogleComputeInstance#type}

---

### GoogleComputeInstanceNetworkInterface <a name="GoogleComputeInstanceNetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceNetworkInterface {
    object AccessConfig = null,
    object AliasIpRange = null,
    double InternalIpv6PrefixLength = null,
    object Ipv6AccessConfig = null,
    string Ipv6Address = null,
    string Network = null,
    string NetworkAttachment = null,
    string NetworkIp = null,
    string NicType = null,
    double QueueCount = null,
    string SecurityPolicy = null,
    string StackType = null,
    string Subnetwork = null,
    string SubnetworkProject = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.accessConfig">AccessConfig</a></code> | <code>object</code> | access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.aliasIpRange">AliasIpRange</a></code> | <code>object</code> | alias_ip_range block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.internalIpv6PrefixLength">InternalIpv6PrefixLength</a></code> | <code>double</code> | The prefix length of the primary internal IPv6 range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.ipv6AccessConfig">Ipv6AccessConfig</a></code> | <code>object</code> | ipv6_access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | An IPv6 internal network address for this network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.network">Network</a></code> | <code>string</code> | The name or self_link of the network attached to this interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.networkIp">NetworkIp</a></code> | <code>string</code> | The private IP address assigned to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.nicType">NicType</a></code> | <code>string</code> | The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, IDPF, MRDMA, and IRDMA. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.queueCount">QueueCount</a></code> | <code>double</code> | The networking queue count that's specified by users for the network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | A full or partial URL to a security policy to add to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.stackType">StackType</a></code> | <code>string</code> | The stack type for this network interface to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.subnetwork">Subnetwork</a></code> | <code>string</code> | The name or self_link of the subnetwork attached to this interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.subnetworkProject">SubnetworkProject</a></code> | <code>string</code> | The project in which the subnetwork belongs. |

---

##### `AccessConfig`<sup>Optional</sup> <a name="AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.accessConfig"></a>

```csharp
public object AccessConfig { get; set; }
```

- *Type:* object

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#access_config GoogleComputeInstance#access_config}

---

##### `AliasIpRange`<sup>Optional</sup> <a name="AliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.aliasIpRange"></a>

```csharp
public object AliasIpRange { get; set; }
```

- *Type:* object

alias_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#alias_ip_range GoogleComputeInstance#alias_ip_range}

---

##### `InternalIpv6PrefixLength`<sup>Optional</sup> <a name="InternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.internalIpv6PrefixLength"></a>

```csharp
public double InternalIpv6PrefixLength { get; set; }
```

- *Type:* double

The prefix length of the primary internal IPv6 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#internal_ipv6_prefix_length GoogleComputeInstance#internal_ipv6_prefix_length}

---

##### `Ipv6AccessConfig`<sup>Optional</sup> <a name="Ipv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.ipv6AccessConfig"></a>

```csharp
public object Ipv6AccessConfig { get; set; }
```

- *Type:* object

ipv6_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#ipv6_access_config GoogleComputeInstance#ipv6_access_config}

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; set; }
```

- *Type:* string

An IPv6 internal network address for this network interface.

If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#ipv6_address GoogleComputeInstance#ipv6_address}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The name or self_link of the network attached to this interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#network GoogleComputeInstance#network}

---

##### `NetworkAttachment`<sup>Optional</sup> <a name="NetworkAttachment" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; set; }
```

- *Type:* string

The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#network_attachment GoogleComputeInstance#network_attachment}

---

##### `NetworkIp`<sup>Optional</sup> <a name="NetworkIp" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.networkIp"></a>

```csharp
public string NetworkIp { get; set; }
```

- *Type:* string

The private IP address assigned to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#network_ip GoogleComputeInstance#network_ip}

---

##### `NicType`<sup>Optional</sup> <a name="NicType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.nicType"></a>

```csharp
public string NicType { get; set; }
```

- *Type:* string

The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, IDPF, MRDMA, and IRDMA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#nic_type GoogleComputeInstance#nic_type}

---

##### `QueueCount`<sup>Optional</sup> <a name="QueueCount" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.queueCount"></a>

```csharp
public double QueueCount { get; set; }
```

- *Type:* double

The networking queue count that's specified by users for the network interface.

Both Rx and Tx queues will be set to this number. It will be empty if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#queue_count GoogleComputeInstance#queue_count}

---

##### `SecurityPolicy`<sup>Optional</sup> <a name="SecurityPolicy" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; set; }
```

- *Type:* string

A full or partial URL to a security policy to add to this instance.

If this field is set to an empty string it will remove the associated security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#security_policy GoogleComputeInstance#security_policy}

---

##### `StackType`<sup>Optional</sup> <a name="StackType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.stackType"></a>

```csharp
public string StackType { get; set; }
```

- *Type:* string

The stack type for this network interface to identify whether the IPv6 feature is enabled or not.

If not specified, IPV4_ONLY will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#stack_type GoogleComputeInstance#stack_type}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.subnetwork"></a>

```csharp
public string Subnetwork { get; set; }
```

- *Type:* string

The name or self_link of the subnetwork attached to this interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#subnetwork GoogleComputeInstance#subnetwork}

---

##### `SubnetworkProject`<sup>Optional</sup> <a name="SubnetworkProject" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterface.property.subnetworkProject"></a>

```csharp
public string SubnetworkProject { get; set; }
```

- *Type:* string

The project in which the subnetwork belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#subnetwork_project GoogleComputeInstance#subnetwork_project}

---

### GoogleComputeInstanceNetworkInterfaceAccessConfig <a name="GoogleComputeInstanceNetworkInterfaceAccessConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceNetworkInterfaceAccessConfig {
    string NatIp = null,
    string NetworkTier = null,
    string PublicPtrDomainName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig.property.natIp">NatIp</a></code> | <code>string</code> | The IP address that is be 1:1 mapped to the instance's network ip. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig.property.networkTier">NetworkTier</a></code> | <code>string</code> | The networking tier used for configuring this instance. One of PREMIUM or STANDARD. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>string</code> | The DNS domain name for the public PTR record. |

---

##### `NatIp`<sup>Optional</sup> <a name="NatIp" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig.property.natIp"></a>

```csharp
public string NatIp { get; set; }
```

- *Type:* string

The IP address that is be 1:1 mapped to the instance's network ip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#nat_ip GoogleComputeInstance#nat_ip}

---

##### `NetworkTier`<sup>Optional</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig.property.networkTier"></a>

```csharp
public string NetworkTier { get; set; }
```

- *Type:* string

The networking tier used for configuring this instance. One of PREMIUM or STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#network_tier GoogleComputeInstance#network_tier}

---

##### `PublicPtrDomainName`<sup>Optional</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfig.property.publicPtrDomainName"></a>

```csharp
public string PublicPtrDomainName { get; set; }
```

- *Type:* string

The DNS domain name for the public PTR record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#public_ptr_domain_name GoogleComputeInstance#public_ptr_domain_name}

---

### GoogleComputeInstanceNetworkInterfaceAliasIpRange <a name="GoogleComputeInstanceNetworkInterfaceAliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceNetworkInterfaceAliasIpRange {
    string IpCidrRange,
    string SubnetworkRangeName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRange.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | The IP CIDR range represented by this alias IP range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRange.property.subnetworkRangeName">SubnetworkRangeName</a></code> | <code>string</code> | The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. |

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRange.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; set; }
```

- *Type:* string

The IP CIDR range represented by this alias IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#ip_cidr_range GoogleComputeInstance#ip_cidr_range}

---

##### `SubnetworkRangeName`<sup>Optional</sup> <a name="SubnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRange.property.subnetworkRangeName"></a>

```csharp
public string SubnetworkRangeName { get; set; }
```

- *Type:* string

The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#subnetwork_range_name GoogleComputeInstance#subnetwork_range_name}

---

### GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig <a name="GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig {
    string NetworkTier,
    string ExternalIpv6 = null,
    string ExternalIpv6PrefixLength = null,
    string Name = null,
    string PublicPtrDomainName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.property.networkTier">NetworkTier</a></code> | <code>string</code> | The service-level to be provided for IPv6 traffic when the subnet has an external subnet. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.property.externalIpv6">ExternalIpv6</a></code> | <code>string</code> | The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.property.externalIpv6PrefixLength">ExternalIpv6PrefixLength</a></code> | <code>string</code> | The prefix length of the external IPv6 range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.property.name">Name</a></code> | <code>string</code> | The name of this access configuration. In ipv6AccessConfigs, the recommended name is External IPv6. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>string</code> | The domain name to be used when creating DNSv6 records for the external IPv6 ranges. |

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.property.networkTier"></a>

```csharp
public string NetworkTier { get; set; }
```

- *Type:* string

The service-level to be provided for IPv6 traffic when the subnet has an external subnet.

Only PREMIUM tier is valid for IPv6

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#network_tier GoogleComputeInstance#network_tier}

---

##### `ExternalIpv6`<sup>Optional</sup> <a name="ExternalIpv6" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.property.externalIpv6"></a>

```csharp
public string ExternalIpv6 { get; set; }
```

- *Type:* string

The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig.

To use a static external IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an external IPv6 address from the instance's subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#external_ipv6 GoogleComputeInstance#external_ipv6}

---

##### `ExternalIpv6PrefixLength`<sup>Optional</sup> <a name="ExternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.property.externalIpv6PrefixLength"></a>

```csharp
public string ExternalIpv6PrefixLength { get; set; }
```

- *Type:* string

The prefix length of the external IPv6 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#external_ipv6_prefix_length GoogleComputeInstance#external_ipv6_prefix_length}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of this access configuration. In ipv6AccessConfigs, the recommended name is External IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#name GoogleComputeInstance#name}

---

##### `PublicPtrDomainName`<sup>Optional</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.property.publicPtrDomainName"></a>

```csharp
public string PublicPtrDomainName { get; set; }
```

- *Type:* string

The domain name to be used when creating DNSv6 records for the external IPv6 ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#public_ptr_domain_name GoogleComputeInstance#public_ptr_domain_name}

---

### GoogleComputeInstanceNetworkPerformanceConfig <a name="GoogleComputeInstanceNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceNetworkPerformanceConfig {
    string TotalEgressBandwidthTier
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfig.property.totalEgressBandwidthTier">TotalEgressBandwidthTier</a></code> | <code>string</code> | The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT. |

---

##### `TotalEgressBandwidthTier`<sup>Required</sup> <a name="TotalEgressBandwidthTier" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfig.property.totalEgressBandwidthTier"></a>

```csharp
public string TotalEgressBandwidthTier { get; set; }
```

- *Type:* string

The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#total_egress_bandwidth_tier GoogleComputeInstance#total_egress_bandwidth_tier}

---

### GoogleComputeInstanceParams <a name="GoogleComputeInstanceParams" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceParams {
    System.Collections.Generic.IDictionary<string, string> ResourceManagerTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParams.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of resource manager tags. |

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParams.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#resource_manager_tags GoogleComputeInstance#resource_manager_tags}

---

### GoogleComputeInstanceReservationAffinity <a name="GoogleComputeInstanceReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceReservationAffinity {
    string Type,
    GoogleComputeInstanceReservationAffinitySpecificReservation SpecificReservation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity.property.type">Type</a></code> | <code>string</code> | The type of reservation from which this instance can consume resources. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity.property.specificReservation">SpecificReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation">GoogleComputeInstanceReservationAffinitySpecificReservation</a></code> | specific_reservation block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of reservation from which this instance can consume resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#type GoogleComputeInstance#type}

---

##### `SpecificReservation`<sup>Optional</sup> <a name="SpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity.property.specificReservation"></a>

```csharp
public GoogleComputeInstanceReservationAffinitySpecificReservation SpecificReservation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation">GoogleComputeInstanceReservationAffinitySpecificReservation</a>

specific_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#specific_reservation GoogleComputeInstance#specific_reservation}

---

### GoogleComputeInstanceReservationAffinitySpecificReservation <a name="GoogleComputeInstanceReservationAffinitySpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceReservationAffinitySpecificReservation {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation.property.key">Key</a></code> | <code>string</code> | Corresponds to the label key of a reservation resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation.property.values">Values</a></code> | <code>string[]</code> | Corresponds to the label values of a reservation resource. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Corresponds to the label key of a reservation resource.

To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#key GoogleComputeInstance#key}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Corresponds to the label values of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#values GoogleComputeInstance#values}

---

### GoogleComputeInstanceScheduling <a name="GoogleComputeInstanceScheduling" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceScheduling {
    object AutomaticRestart = null,
    double AvailabilityDomain = null,
    double HostErrorTimeoutSeconds = null,
    string InstanceTerminationAction = null,
    GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout LocalSsdRecoveryTimeout = null,
    string MaintenanceInterval = null,
    GoogleComputeInstanceSchedulingMaxRunDuration MaxRunDuration = null,
    double MinNodeCpus = null,
    object NodeAffinities = null,
    string OnHostMaintenance = null,
    GoogleComputeInstanceSchedulingOnInstanceStopAction OnInstanceStopAction = null,
    object Preemptible = null,
    string ProvisioningModel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.automaticRestart">AutomaticRestart</a></code> | <code>object</code> | Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.availabilityDomain">AvailabilityDomain</a></code> | <code>double</code> | Specifies the availability domain, which this instance should be scheduled on. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.hostErrorTimeoutSeconds">HostErrorTimeoutSeconds</a></code> | <code>double</code> | Specify the time in seconds for host error detection, the value must be within the range of [90, 330] with the increment of 30, if unset, the default behavior of host error recovery will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.instanceTerminationAction">InstanceTerminationAction</a></code> | <code>string</code> | Specifies the action GCE should take when SPOT VM is preempted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.localSsdRecoveryTimeout">LocalSsdRecoveryTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout</a></code> | local_ssd_recovery_timeout block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.maintenanceInterval">MaintenanceInterval</a></code> | <code>string</code> | Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.maxRunDuration">MaxRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration">GoogleComputeInstanceSchedulingMaxRunDuration</a></code> | max_run_duration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.minNodeCpus">MinNodeCpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#min_node_cpus GoogleComputeInstance#min_node_cpus}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.nodeAffinities">NodeAffinities</a></code> | <code>object</code> | node_affinities block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.onHostMaintenance">OnHostMaintenance</a></code> | <code>string</code> | Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.onInstanceStopAction">OnInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopAction">GoogleComputeInstanceSchedulingOnInstanceStopAction</a></code> | on_instance_stop_action block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.preemptible">Preemptible</a></code> | <code>object</code> | Whether the instance is preemptible. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.provisioningModel">ProvisioningModel</a></code> | <code>string</code> | Whether the instance is spot. If this is set as SPOT. |

---

##### `AutomaticRestart`<sup>Optional</sup> <a name="AutomaticRestart" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.automaticRestart"></a>

```csharp
public object AutomaticRestart { get; set; }
```

- *Type:* object

Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#automatic_restart GoogleComputeInstance#automatic_restart}

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.availabilityDomain"></a>

```csharp
public double AvailabilityDomain { get; set; }
```

- *Type:* double

Specifies the availability domain, which this instance should be scheduled on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#availability_domain GoogleComputeInstance#availability_domain}

---

##### `HostErrorTimeoutSeconds`<sup>Optional</sup> <a name="HostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.hostErrorTimeoutSeconds"></a>

```csharp
public double HostErrorTimeoutSeconds { get; set; }
```

- *Type:* double

Specify the time in seconds for host error detection, the value must be within the range of [90, 330] with the increment of 30, if unset, the default behavior of host error recovery will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#host_error_timeout_seconds GoogleComputeInstance#host_error_timeout_seconds}

---

##### `InstanceTerminationAction`<sup>Optional</sup> <a name="InstanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.instanceTerminationAction"></a>

```csharp
public string InstanceTerminationAction { get; set; }
```

- *Type:* string

Specifies the action GCE should take when SPOT VM is preempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#instance_termination_action GoogleComputeInstance#instance_termination_action}

---

##### `LocalSsdRecoveryTimeout`<sup>Optional</sup> <a name="LocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.localSsdRecoveryTimeout"></a>

```csharp
public GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout LocalSsdRecoveryTimeout { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout</a>

local_ssd_recovery_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#local_ssd_recovery_timeout GoogleComputeInstance#local_ssd_recovery_timeout}

---

##### `MaintenanceInterval`<sup>Optional</sup> <a name="MaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.maintenanceInterval"></a>

```csharp
public string MaintenanceInterval { get; set; }
```

- *Type:* string

Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#maintenance_interval GoogleComputeInstance#maintenance_interval}

---

##### `MaxRunDuration`<sup>Optional</sup> <a name="MaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.maxRunDuration"></a>

```csharp
public GoogleComputeInstanceSchedulingMaxRunDuration MaxRunDuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration">GoogleComputeInstanceSchedulingMaxRunDuration</a>

max_run_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#max_run_duration GoogleComputeInstance#max_run_duration}

---

##### `MinNodeCpus`<sup>Optional</sup> <a name="MinNodeCpus" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.minNodeCpus"></a>

```csharp
public double MinNodeCpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#min_node_cpus GoogleComputeInstance#min_node_cpus}.

---

##### `NodeAffinities`<sup>Optional</sup> <a name="NodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.nodeAffinities"></a>

```csharp
public object NodeAffinities { get; set; }
```

- *Type:* object

node_affinities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#node_affinities GoogleComputeInstance#node_affinities}

---

##### `OnHostMaintenance`<sup>Optional</sup> <a name="OnHostMaintenance" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.onHostMaintenance"></a>

```csharp
public string OnHostMaintenance { get; set; }
```

- *Type:* string

Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#on_host_maintenance GoogleComputeInstance#on_host_maintenance}

---

##### `OnInstanceStopAction`<sup>Optional</sup> <a name="OnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.onInstanceStopAction"></a>

```csharp
public GoogleComputeInstanceSchedulingOnInstanceStopAction OnInstanceStopAction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopAction">GoogleComputeInstanceSchedulingOnInstanceStopAction</a>

on_instance_stop_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#on_instance_stop_action GoogleComputeInstance#on_instance_stop_action}

---

##### `Preemptible`<sup>Optional</sup> <a name="Preemptible" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.preemptible"></a>

```csharp
public object Preemptible { get; set; }
```

- *Type:* object

Whether the instance is preemptible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#preemptible GoogleComputeInstance#preemptible}

---

##### `ProvisioningModel`<sup>Optional</sup> <a name="ProvisioningModel" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling.property.provisioningModel"></a>

```csharp
public string ProvisioningModel { get; set; }
```

- *Type:* string

Whether the instance is spot. If this is set as SPOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#provisioning_model GoogleComputeInstance#provisioning_model}

---

### GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout <a name="GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout {
    double Seconds,
    double Nanos = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout.property.seconds">Seconds</a></code> | <code>double</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout.property.nanos">Nanos</a></code> | <code>double</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#seconds GoogleComputeInstance#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#nanos GoogleComputeInstance#nanos}

---

### GoogleComputeInstanceSchedulingMaxRunDuration <a name="GoogleComputeInstanceSchedulingMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceSchedulingMaxRunDuration {
    double Seconds,
    double Nanos = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration.property.seconds">Seconds</a></code> | <code>double</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration.property.nanos">Nanos</a></code> | <code>double</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#seconds GoogleComputeInstance#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#nanos GoogleComputeInstance#nanos}

---

### GoogleComputeInstanceSchedulingNodeAffinities <a name="GoogleComputeInstanceSchedulingNodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceSchedulingNodeAffinities {
    string Key,
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#key GoogleComputeInstance#key}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#operator GoogleComputeInstance#operator}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#values GoogleComputeInstance#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#key GoogleComputeInstance#key}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#operator GoogleComputeInstance#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinities.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#values GoogleComputeInstance#values}.

---

### GoogleComputeInstanceSchedulingOnInstanceStopAction <a name="GoogleComputeInstanceSchedulingOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceSchedulingOnInstanceStopAction {
    object DiscardLocalSsd = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopAction.property.discardLocalSsd">DiscardLocalSsd</a></code> | <code>object</code> | If true, the contents of any attached Local SSD disks will be discarded. |

---

##### `DiscardLocalSsd`<sup>Optional</sup> <a name="DiscardLocalSsd" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopAction.property.discardLocalSsd"></a>

```csharp
public object DiscardLocalSsd { get; set; }
```

- *Type:* object

If true, the contents of any attached Local SSD disks will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#discard_local_ssd GoogleComputeInstance#discard_local_ssd}

---

### GoogleComputeInstanceScratchDisk <a name="GoogleComputeInstanceScratchDisk" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceScratchDisk {
    string Interface,
    string DeviceName = null,
    double Size = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk.property.interface">Interface</a></code> | <code>string</code> | The disk interface used for attaching this disk. One of SCSI or NVME. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk.property.deviceName">DeviceName</a></code> | <code>string</code> | Name with which the attached disk is accessible under /dev/disk/by-id/. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk.property.size">Size</a></code> | <code>double</code> | The size of the disk in gigabytes. One of 375 or 3000. |

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk.property.interface"></a>

```csharp
public string Interface { get; set; }
```

- *Type:* string

The disk interface used for attaching this disk. One of SCSI or NVME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#interface GoogleComputeInstance#interface}

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

Name with which the attached disk is accessible under /dev/disk/by-id/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#device_name GoogleComputeInstance#device_name}

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDisk.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

The size of the disk in gigabytes. One of 375 or 3000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#size GoogleComputeInstance#size}

---

### GoogleComputeInstanceServiceAccount <a name="GoogleComputeInstanceServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceServiceAccount {
    string[] Scopes,
    string Email = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount.property.scopes">Scopes</a></code> | <code>string[]</code> | A list of service scopes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount.property.email">Email</a></code> | <code>string</code> | The service account e-mail address. |

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

A list of service scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#scopes GoogleComputeInstance#scopes}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

The service account e-mail address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#email GoogleComputeInstance#email}

---

### GoogleComputeInstanceShieldedInstanceConfig <a name="GoogleComputeInstanceShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceShieldedInstanceConfig {
    object EnableIntegrityMonitoring = null,
    object EnableSecureBoot = null,
    object EnableVtpm = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>object</code> | Whether integrity monitoring is enabled for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | Whether secure boot is enabled for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig.property.enableVtpm">EnableVtpm</a></code> | <code>object</code> | Whether the instance uses vTPM. |

---

##### `EnableIntegrityMonitoring`<sup>Optional</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```csharp
public object EnableIntegrityMonitoring { get; set; }
```

- *Type:* object

Whether integrity monitoring is enabled for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#enable_integrity_monitoring GoogleComputeInstance#enable_integrity_monitoring}

---

##### `EnableSecureBoot`<sup>Optional</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; set; }
```

- *Type:* object

Whether secure boot is enabled for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#enable_secure_boot GoogleComputeInstance#enable_secure_boot}

---

##### `EnableVtpm`<sup>Optional</sup> <a name="EnableVtpm" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig.property.enableVtpm"></a>

```csharp
public object EnableVtpm { get; set; }
```

- *Type:* object

Whether the instance uses vTPM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#enable_vtpm GoogleComputeInstance#enable_vtpm}

---

### GoogleComputeInstanceTimeouts <a name="GoogleComputeInstanceTimeouts" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#create GoogleComputeInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#delete GoogleComputeInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#update GoogleComputeInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#create GoogleComputeInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#delete GoogleComputeInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_instance#update GoogleComputeInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInstanceAdvancedMachineFeaturesOutputReference <a name="GoogleComputeInstanceAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceAdvancedMachineFeaturesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization">ResetEnableNestedVirtualization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking">ResetEnableUefiNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit">ResetPerformanceMonitoringUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetThreadsPerCore">ResetThreadsPerCore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetTurboMode">ResetTurboMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount">ResetVisibleCoreCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableNestedVirtualization` <a name="ResetEnableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization"></a>

```csharp
private void ResetEnableNestedVirtualization()
```

##### `ResetEnableUefiNetworking` <a name="ResetEnableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking"></a>

```csharp
private void ResetEnableUefiNetworking()
```

##### `ResetPerformanceMonitoringUnit` <a name="ResetPerformanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit"></a>

```csharp
private void ResetPerformanceMonitoringUnit()
```

##### `ResetThreadsPerCore` <a name="ResetThreadsPerCore" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetThreadsPerCore"></a>

```csharp
private void ResetThreadsPerCore()
```

##### `ResetTurboMode` <a name="ResetTurboMode" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetTurboMode"></a>

```csharp
private void ResetTurboMode()
```

##### `ResetVisibleCoreCount` <a name="ResetVisibleCoreCount" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount"></a>

```csharp
private void ResetVisibleCoreCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput">EnableNestedVirtualizationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput">EnableUefiNetworkingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput">PerformanceMonitoringUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">ThreadsPerCoreInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.turboModeInput">TurboModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput">VisibleCoreCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking">EnableUefiNetworking</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit">PerformanceMonitoringUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.threadsPerCore">ThreadsPerCore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.turboMode">TurboMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.visibleCoreCount">VisibleCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures">GoogleComputeInstanceAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableNestedVirtualizationInput`<sup>Optional</sup> <a name="EnableNestedVirtualizationInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput"></a>

```csharp
public object EnableNestedVirtualizationInput { get; }
```

- *Type:* object

---

##### `EnableUefiNetworkingInput`<sup>Optional</sup> <a name="EnableUefiNetworkingInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput"></a>

```csharp
public object EnableUefiNetworkingInput { get; }
```

- *Type:* object

---

##### `PerformanceMonitoringUnitInput`<sup>Optional</sup> <a name="PerformanceMonitoringUnitInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput"></a>

```csharp
public string PerformanceMonitoringUnitInput { get; }
```

- *Type:* string

---

##### `ThreadsPerCoreInput`<sup>Optional</sup> <a name="ThreadsPerCoreInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```csharp
public double ThreadsPerCoreInput { get; }
```

- *Type:* double

---

##### `TurboModeInput`<sup>Optional</sup> <a name="TurboModeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.turboModeInput"></a>

```csharp
public string TurboModeInput { get; }
```

- *Type:* string

---

##### `VisibleCoreCountInput`<sup>Optional</sup> <a name="VisibleCoreCountInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput"></a>

```csharp
public double VisibleCoreCountInput { get; }
```

- *Type:* double

---

##### `EnableNestedVirtualization`<sup>Required</sup> <a name="EnableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization"></a>

```csharp
public object EnableNestedVirtualization { get; }
```

- *Type:* object

---

##### `EnableUefiNetworking`<sup>Required</sup> <a name="EnableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking"></a>

```csharp
public object EnableUefiNetworking { get; }
```

- *Type:* object

---

##### `PerformanceMonitoringUnit`<sup>Required</sup> <a name="PerformanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit"></a>

```csharp
public string PerformanceMonitoringUnit { get; }
```

- *Type:* string

---

##### `ThreadsPerCore`<sup>Required</sup> <a name="ThreadsPerCore" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```csharp
public double ThreadsPerCore { get; }
```

- *Type:* double

---

##### `TurboMode`<sup>Required</sup> <a name="TurboMode" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.turboMode"></a>

```csharp
public string TurboMode { get; }
```

- *Type:* string

---

##### `VisibleCoreCount`<sup>Required</sup> <a name="VisibleCoreCount" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.visibleCoreCount"></a>

```csharp
public double VisibleCoreCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceAdvancedMachineFeatures InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAdvancedMachineFeatures">GoogleComputeInstanceAdvancedMachineFeatures</a>

---


### GoogleComputeInstanceAttachedDiskList <a name="GoogleComputeInstanceAttachedDiskList" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceAttachedDiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.get"></a>

```csharp
private GoogleComputeInstanceAttachedDiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceAttachedDiskOutputReference <a name="GoogleComputeInstanceAttachedDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceAttachedDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.resetDiskEncryptionKeyRaw">ResetDiskEncryptionKeyRaw</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.resetKmsKeySelfLink">ResetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.resetDeviceName"></a>

```csharp
private void ResetDeviceName()
```

##### `ResetDiskEncryptionKeyRaw` <a name="ResetDiskEncryptionKeyRaw" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.resetDiskEncryptionKeyRaw"></a>

```csharp
private void ResetDiskEncryptionKeyRaw()
```

##### `ResetKmsKeySelfLink` <a name="ResetKmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.resetKmsKeySelfLink"></a>

```csharp
private void ResetKmsKeySelfLink()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeySha256">DiskEncryptionKeySha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeyRawInput">DiskEncryptionKeyRawInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeyRaw">DiskEncryptionKeyRaw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskEncryptionKeySha256`<sup>Required</sup> <a name="DiskEncryptionKeySha256" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeySha256"></a>

```csharp
public string DiskEncryptionKeySha256 { get; }
```

- *Type:* string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `DiskEncryptionKeyRawInput`<sup>Optional</sup> <a name="DiskEncryptionKeyRawInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeyRawInput"></a>

```csharp
public string DiskEncryptionKeyRawInput { get; }
```

- *Type:* string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.kmsKeySelfLinkInput"></a>

```csharp
public string KmsKeySelfLinkInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `DiskEncryptionKeyRaw`<sup>Required</sup> <a name="DiskEncryptionKeyRaw" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeyRaw"></a>

```csharp
public string DiskEncryptionKeyRaw { get; }
```

- *Type:* string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceAttachedDiskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceBootDiskInitializeParamsOutputReference <a name="GoogleComputeInstanceBootDiskInitializeParamsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceBootDiskInitializeParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetEnableConfidentialCompute">ResetEnableConfidentialCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetProvisionedIops">ResetProvisionedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetProvisionedThroughput">ResetProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetResourcePolicies">ResetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetStoragePool">ResetStoragePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableConfidentialCompute` <a name="ResetEnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetEnableConfidentialCompute"></a>

```csharp
private void ResetEnableConfidentialCompute()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProvisionedIops` <a name="ResetProvisionedIops" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetProvisionedIops"></a>

```csharp
private void ResetProvisionedIops()
```

##### `ResetProvisionedThroughput` <a name="ResetProvisionedThroughput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetProvisionedThroughput"></a>

```csharp
private void ResetProvisionedThroughput()
```

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetResourceManagerTags"></a>

```csharp
private void ResetResourceManagerTags()
```

##### `ResetResourcePolicies` <a name="ResetResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetResourcePolicies"></a>

```csharp
private void ResetResourcePolicies()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetSize"></a>

```csharp
private void ResetSize()
```

##### `ResetStoragePool` <a name="ResetStoragePool" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetStoragePool"></a>

```csharp
private void ResetStoragePool()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.enableConfidentialComputeInput">EnableConfidentialComputeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedIopsInput">ProvisionedIopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedThroughputInput">ProvisionedThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourcePoliciesInput">ResourcePoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.storagePoolInput">StoragePoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedIops">ProvisionedIops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourcePolicies">ResourcePolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.storagePool">StoragePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams">GoogleComputeInstanceBootDiskInitializeParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableConfidentialComputeInput`<sup>Optional</sup> <a name="EnableConfidentialComputeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.enableConfidentialComputeInput"></a>

```csharp
public object EnableConfidentialComputeInput { get; }
```

- *Type:* object

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProvisionedIopsInput`<sup>Optional</sup> <a name="ProvisionedIopsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedIopsInput"></a>

```csharp
public double ProvisionedIopsInput { get; }
```

- *Type:* double

---

##### `ProvisionedThroughputInput`<sup>Optional</sup> <a name="ProvisionedThroughputInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedThroughputInput"></a>

```csharp
public double ProvisionedThroughputInput { get; }
```

- *Type:* double

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourceManagerTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourcePoliciesInput`<sup>Optional</sup> <a name="ResourcePoliciesInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourcePoliciesInput"></a>

```csharp
public string[] ResourcePoliciesInput { get; }
```

- *Type:* string[]

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `StoragePoolInput`<sup>Optional</sup> <a name="StoragePoolInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.storagePoolInput"></a>

```csharp
public string StoragePoolInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `EnableConfidentialCompute`<sup>Required</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.enableConfidentialCompute"></a>

```csharp
public object EnableConfidentialCompute { get; }
```

- *Type:* object

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProvisionedIops`<sup>Required</sup> <a name="ProvisionedIops" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedIops"></a>

```csharp
public double ProvisionedIops { get; }
```

- *Type:* double

---

##### `ProvisionedThroughput`<sup>Required</sup> <a name="ProvisionedThroughput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedThroughput"></a>

```csharp
public double ProvisionedThroughput { get; }
```

- *Type:* double

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourcePolicies`<sup>Required</sup> <a name="ResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourcePolicies"></a>

```csharp
public string[] ResourcePolicies { get; }
```

- *Type:* string[]

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `StoragePool`<sup>Required</sup> <a name="StoragePool" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.storagePool"></a>

```csharp
public string StoragePool { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceBootDiskInitializeParams InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams">GoogleComputeInstanceBootDiskInitializeParams</a>

---


### GoogleComputeInstanceBootDiskOutputReference <a name="GoogleComputeInstanceBootDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceBootDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.putInitializeParams">PutInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetAutoDelete">ResetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetDiskEncryptionKeyRaw">ResetDiskEncryptionKeyRaw</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetInitializeParams">ResetInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetInterface">ResetInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetKmsKeySelfLink">ResetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInitializeParams` <a name="PutInitializeParams" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.putInitializeParams"></a>

```csharp
private void PutInitializeParams(GoogleComputeInstanceBootDiskInitializeParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.putInitializeParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams">GoogleComputeInstanceBootDiskInitializeParams</a>

---

##### `ResetAutoDelete` <a name="ResetAutoDelete" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetAutoDelete"></a>

```csharp
private void ResetAutoDelete()
```

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetDeviceName"></a>

```csharp
private void ResetDeviceName()
```

##### `ResetDiskEncryptionKeyRaw` <a name="ResetDiskEncryptionKeyRaw" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetDiskEncryptionKeyRaw"></a>

```csharp
private void ResetDiskEncryptionKeyRaw()
```

##### `ResetInitializeParams` <a name="ResetInitializeParams" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetInitializeParams"></a>

```csharp
private void ResetInitializeParams()
```

##### `ResetInterface` <a name="ResetInterface" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetInterface"></a>

```csharp
private void ResetInterface()
```

##### `ResetKmsKeySelfLink` <a name="ResetKmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetKmsKeySelfLink"></a>

```csharp
private void ResetKmsKeySelfLink()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeySha256">DiskEncryptionKeySha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.initializeParams">InitializeParams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference">GoogleComputeInstanceBootDiskInitializeParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.autoDeleteInput">AutoDeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeyRawInput">DiskEncryptionKeyRawInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.initializeParamsInput">InitializeParamsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams">GoogleComputeInstanceBootDiskInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.interfaceInput">InterfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.autoDelete">AutoDelete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeyRaw">DiskEncryptionKeyRaw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.interface">Interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk">GoogleComputeInstanceBootDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskEncryptionKeySha256`<sup>Required</sup> <a name="DiskEncryptionKeySha256" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeySha256"></a>

```csharp
public string DiskEncryptionKeySha256 { get; }
```

- *Type:* string

---

##### `InitializeParams`<sup>Required</sup> <a name="InitializeParams" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.initializeParams"></a>

```csharp
public GoogleComputeInstanceBootDiskInitializeParamsOutputReference InitializeParams { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParamsOutputReference">GoogleComputeInstanceBootDiskInitializeParamsOutputReference</a>

---

##### `AutoDeleteInput`<sup>Optional</sup> <a name="AutoDeleteInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.autoDeleteInput"></a>

```csharp
public object AutoDeleteInput { get; }
```

- *Type:* object

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `DiskEncryptionKeyRawInput`<sup>Optional</sup> <a name="DiskEncryptionKeyRawInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeyRawInput"></a>

```csharp
public string DiskEncryptionKeyRawInput { get; }
```

- *Type:* string

---

##### `InitializeParamsInput`<sup>Optional</sup> <a name="InitializeParamsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.initializeParamsInput"></a>

```csharp
public GoogleComputeInstanceBootDiskInitializeParams InitializeParamsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskInitializeParams">GoogleComputeInstanceBootDiskInitializeParams</a>

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.interfaceInput"></a>

```csharp
public string InterfaceInput { get; }
```

- *Type:* string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.kmsKeySelfLinkInput"></a>

```csharp
public string KmsKeySelfLinkInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `AutoDelete`<sup>Required</sup> <a name="AutoDelete" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.autoDelete"></a>

```csharp
public object AutoDelete { get; }
```

- *Type:* object

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `DiskEncryptionKeyRaw`<sup>Required</sup> <a name="DiskEncryptionKeyRaw" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeyRaw"></a>

```csharp
public string DiskEncryptionKeyRaw { get; }
```

- *Type:* string

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.interface"></a>

```csharp
public string Interface { get; }
```

- *Type:* string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDiskOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceBootDisk InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceBootDisk">GoogleComputeInstanceBootDisk</a>

---


### GoogleComputeInstanceConfidentialInstanceConfigOutputReference <a name="GoogleComputeInstanceConfidentialInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceConfidentialInstanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType">ResetConfidentialInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute">ResetEnableConfidentialCompute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfidentialInstanceType` <a name="ResetConfidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType"></a>

```csharp
private void ResetConfidentialInstanceType()
```

##### `ResetEnableConfidentialCompute` <a name="ResetEnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute"></a>

```csharp
private void ResetEnableConfidentialCompute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput">ConfidentialInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput">EnableConfidentialComputeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.confidentialInstanceType">ConfidentialInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig">GoogleComputeInstanceConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfidentialInstanceTypeInput`<sup>Optional</sup> <a name="ConfidentialInstanceTypeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput"></a>

```csharp
public string ConfidentialInstanceTypeInput { get; }
```

- *Type:* string

---

##### `EnableConfidentialComputeInput`<sup>Optional</sup> <a name="EnableConfidentialComputeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput"></a>

```csharp
public object EnableConfidentialComputeInput { get; }
```

- *Type:* object

---

##### `ConfidentialInstanceType`<sup>Required</sup> <a name="ConfidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.confidentialInstanceType"></a>

```csharp
public string ConfidentialInstanceType { get; }
```

- *Type:* string

---

##### `EnableConfidentialCompute`<sup>Required</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```csharp
public object EnableConfidentialCompute { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceConfidentialInstanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceConfidentialInstanceConfig">GoogleComputeInstanceConfidentialInstanceConfig</a>

---


### GoogleComputeInstanceGuestAcceleratorList <a name="GoogleComputeInstanceGuestAcceleratorList" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGuestAcceleratorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.get"></a>

```csharp
private GoogleComputeInstanceGuestAcceleratorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceGuestAcceleratorOutputReference <a name="GoogleComputeInstanceGuestAcceleratorOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGuestAcceleratorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceGuestAcceleratorOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceNetworkInterfaceAccessConfigList <a name="GoogleComputeInstanceNetworkInterfaceAccessConfigList" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceNetworkInterfaceAccessConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.get"></a>

```csharp
private GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference <a name="GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resetNatIp">ResetNatIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resetNetworkTier">ResetNetworkTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resetPublicPtrDomainName">ResetPublicPtrDomainName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNatIp` <a name="ResetNatIp" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resetNatIp"></a>

```csharp
private void ResetNatIp()
```

##### `ResetNetworkTier` <a name="ResetNetworkTier" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resetNetworkTier"></a>

```csharp
private void ResetNetworkTier()
```

##### `ResetPublicPtrDomainName` <a name="ResetPublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resetPublicPtrDomainName"></a>

```csharp
private void ResetPublicPtrDomainName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.natIpInput">NatIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.networkTierInput">NetworkTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainNameInput">PublicPtrDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.natIp">NatIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.networkTier">NetworkTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; }
```

- *Type:* string

---

##### `NatIpInput`<sup>Optional</sup> <a name="NatIpInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.natIpInput"></a>

```csharp
public string NatIpInput { get; }
```

- *Type:* string

---

##### `NetworkTierInput`<sup>Optional</sup> <a name="NetworkTierInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.networkTierInput"></a>

```csharp
public string NetworkTierInput { get; }
```

- *Type:* string

---

##### `PublicPtrDomainNameInput`<sup>Optional</sup> <a name="PublicPtrDomainNameInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainNameInput"></a>

```csharp
public string PublicPtrDomainNameInput { get; }
```

- *Type:* string

---

##### `NatIp`<sup>Required</sup> <a name="NatIp" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.natIp"></a>

```csharp
public string NatIp { get; }
```

- *Type:* string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.networkTier"></a>

```csharp
public string NetworkTier { get; }
```

- *Type:* string

---

##### `PublicPtrDomainName`<sup>Required</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName"></a>

```csharp
public string PublicPtrDomainName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceNetworkInterfaceAliasIpRangeList <a name="GoogleComputeInstanceNetworkInterfaceAliasIpRangeList" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceNetworkInterfaceAliasIpRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.get"></a>

```csharp
private GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference <a name="GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName">ResetSubnetworkRangeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubnetworkRangeName` <a name="ResetSubnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName"></a>

```csharp
private void ResetSubnetworkRangeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput">IpCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput">SubnetworkRangeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName">SubnetworkRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpCidrRangeInput`<sup>Optional</sup> <a name="IpCidrRangeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput"></a>

```csharp
public string IpCidrRangeInput { get; }
```

- *Type:* string

---

##### `SubnetworkRangeNameInput`<sup>Optional</sup> <a name="SubnetworkRangeNameInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput"></a>

```csharp
public string SubnetworkRangeNameInput { get; }
```

- *Type:* string

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; }
```

- *Type:* string

---

##### `SubnetworkRangeName`<sup>Required</sup> <a name="SubnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName"></a>

```csharp
public string SubnetworkRangeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList <a name="GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.get"></a>

```csharp
private GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference <a name="GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6">ResetExternalIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6PrefixLength">ResetExternalIpv6PrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resetPublicPtrDomainName">ResetPublicPtrDomainName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExternalIpv6` <a name="ResetExternalIpv6" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6"></a>

```csharp
private void ResetExternalIpv6()
```

##### `ResetExternalIpv6PrefixLength` <a name="ResetExternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6PrefixLength"></a>

```csharp
private void ResetExternalIpv6PrefixLength()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPublicPtrDomainName` <a name="ResetPublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resetPublicPtrDomainName"></a>

```csharp
private void ResetPublicPtrDomainName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6Input">ExternalIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLengthInput">ExternalIpv6PrefixLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput">NetworkTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainNameInput">PublicPtrDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6">ExternalIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength">ExternalIpv6PrefixLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier">NetworkTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; }
```

- *Type:* string

---

##### `ExternalIpv6Input`<sup>Optional</sup> <a name="ExternalIpv6Input" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6Input"></a>

```csharp
public string ExternalIpv6Input { get; }
```

- *Type:* string

---

##### `ExternalIpv6PrefixLengthInput`<sup>Optional</sup> <a name="ExternalIpv6PrefixLengthInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLengthInput"></a>

```csharp
public string ExternalIpv6PrefixLengthInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkTierInput`<sup>Optional</sup> <a name="NetworkTierInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput"></a>

```csharp
public string NetworkTierInput { get; }
```

- *Type:* string

---

##### `PublicPtrDomainNameInput`<sup>Optional</sup> <a name="PublicPtrDomainNameInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainNameInput"></a>

```csharp
public string PublicPtrDomainNameInput { get; }
```

- *Type:* string

---

##### `ExternalIpv6`<sup>Required</sup> <a name="ExternalIpv6" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6"></a>

```csharp
public string ExternalIpv6 { get; }
```

- *Type:* string

---

##### `ExternalIpv6PrefixLength`<sup>Required</sup> <a name="ExternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength"></a>

```csharp
public string ExternalIpv6PrefixLength { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier"></a>

```csharp
public string NetworkTier { get; }
```

- *Type:* string

---

##### `PublicPtrDomainName`<sup>Required</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName"></a>

```csharp
public string PublicPtrDomainName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceNetworkInterfaceList <a name="GoogleComputeInstanceNetworkInterfaceList" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceNetworkInterfaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.get"></a>

```csharp
private GoogleComputeInstanceNetworkInterfaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceNetworkInterfaceOutputReference <a name="GoogleComputeInstanceNetworkInterfaceOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceNetworkInterfaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.putAccessConfig">PutAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.putAliasIpRange">PutAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.putIpv6AccessConfig">PutIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetAccessConfig">ResetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetAliasIpRange">ResetAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength">ResetInternalIpv6PrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetIpv6AccessConfig">ResetIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetNetworkAttachment">ResetNetworkAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetNetworkIp">ResetNetworkIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetNicType">ResetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetQueueCount">ResetQueueCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetSecurityPolicy">ResetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetStackType">ResetStackType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetSubnetworkProject">ResetSubnetworkProject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessConfig` <a name="PutAccessConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.putAccessConfig"></a>

```csharp
private void PutAccessConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* object

---

##### `PutAliasIpRange` <a name="PutAliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.putAliasIpRange"></a>

```csharp
private void PutAliasIpRange(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.putAliasIpRange.parameter.value"></a>

- *Type:* object

---

##### `PutIpv6AccessConfig` <a name="PutIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.putIpv6AccessConfig"></a>

```csharp
private void PutIpv6AccessConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.putIpv6AccessConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessConfig` <a name="ResetAccessConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetAccessConfig"></a>

```csharp
private void ResetAccessConfig()
```

##### `ResetAliasIpRange` <a name="ResetAliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetAliasIpRange"></a>

```csharp
private void ResetAliasIpRange()
```

##### `ResetInternalIpv6PrefixLength` <a name="ResetInternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength"></a>

```csharp
private void ResetInternalIpv6PrefixLength()
```

##### `ResetIpv6AccessConfig` <a name="ResetIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetIpv6AccessConfig"></a>

```csharp
private void ResetIpv6AccessConfig()
```

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetIpv6Address"></a>

```csharp
private void ResetIpv6Address()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetNetworkAttachment` <a name="ResetNetworkAttachment" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetNetworkAttachment"></a>

```csharp
private void ResetNetworkAttachment()
```

##### `ResetNetworkIp` <a name="ResetNetworkIp" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetNetworkIp"></a>

```csharp
private void ResetNetworkIp()
```

##### `ResetNicType` <a name="ResetNicType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetNicType"></a>

```csharp
private void ResetNicType()
```

##### `ResetQueueCount` <a name="ResetQueueCount" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetQueueCount"></a>

```csharp
private void ResetQueueCount()
```

##### `ResetSecurityPolicy` <a name="ResetSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetSecurityPolicy"></a>

```csharp
private void ResetSecurityPolicy()
```

##### `ResetStackType` <a name="ResetStackType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetStackType"></a>

```csharp
private void ResetStackType()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetSubnetwork"></a>

```csharp
private void ResetSubnetwork()
```

##### `ResetSubnetworkProject` <a name="ResetSubnetworkProject" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.resetSubnetworkProject"></a>

```csharp
private void ResetSubnetworkProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList">GoogleComputeInstanceNetworkInterfaceAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.aliasIpRange">AliasIpRange</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList">GoogleComputeInstanceNetworkInterfaceAliasIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AccessConfig">Ipv6AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList">GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AccessType">Ipv6AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.accessConfigInput">AccessConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.aliasIpRangeInput">AliasIpRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput">InternalIpv6PrefixLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AccessConfigInput">Ipv6AccessConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.networkIpInput">NetworkIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.nicTypeInput">NicTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.queueCountInput">QueueCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.securityPolicyInput">SecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.stackTypeInput">StackTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetworkProjectInput">SubnetworkProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.internalIpv6PrefixLength">InternalIpv6PrefixLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.networkIp">NetworkIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.nicType">NicType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.queueCount">QueueCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.stackType">StackType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetworkProject">SubnetworkProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.accessConfig"></a>

```csharp
public GoogleComputeInstanceNetworkInterfaceAccessConfigList AccessConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAccessConfigList">GoogleComputeInstanceNetworkInterfaceAccessConfigList</a>

---

##### `AliasIpRange`<sup>Required</sup> <a name="AliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.aliasIpRange"></a>

```csharp
public GoogleComputeInstanceNetworkInterfaceAliasIpRangeList AliasIpRange { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceAliasIpRangeList">GoogleComputeInstanceNetworkInterfaceAliasIpRangeList</a>

---

##### `Ipv6AccessConfig`<sup>Required</sup> <a name="Ipv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AccessConfig"></a>

```csharp
public GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList Ipv6AccessConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList">GoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList</a>

---

##### `Ipv6AccessType`<sup>Required</sup> <a name="Ipv6AccessType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AccessType"></a>

```csharp
public string Ipv6AccessType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `AccessConfigInput`<sup>Optional</sup> <a name="AccessConfigInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.accessConfigInput"></a>

```csharp
public object AccessConfigInput { get; }
```

- *Type:* object

---

##### `AliasIpRangeInput`<sup>Optional</sup> <a name="AliasIpRangeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.aliasIpRangeInput"></a>

```csharp
public object AliasIpRangeInput { get; }
```

- *Type:* object

---

##### `InternalIpv6PrefixLengthInput`<sup>Optional</sup> <a name="InternalIpv6PrefixLengthInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput"></a>

```csharp
public double InternalIpv6PrefixLengthInput { get; }
```

- *Type:* double

---

##### `Ipv6AccessConfigInput`<sup>Optional</sup> <a name="Ipv6AccessConfigInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AccessConfigInput"></a>

```csharp
public object Ipv6AccessConfigInput { get; }
```

- *Type:* object

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```csharp
public string Ipv6AddressInput { get; }
```

- *Type:* string

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.networkAttachmentInput"></a>

```csharp
public string NetworkAttachmentInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `NetworkIpInput`<sup>Optional</sup> <a name="NetworkIpInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.networkIpInput"></a>

```csharp
public string NetworkIpInput { get; }
```

- *Type:* string

---

##### `NicTypeInput`<sup>Optional</sup> <a name="NicTypeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.nicTypeInput"></a>

```csharp
public string NicTypeInput { get; }
```

- *Type:* string

---

##### `QueueCountInput`<sup>Optional</sup> <a name="QueueCountInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.queueCountInput"></a>

```csharp
public double QueueCountInput { get; }
```

- *Type:* double

---

##### `SecurityPolicyInput`<sup>Optional</sup> <a name="SecurityPolicyInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.securityPolicyInput"></a>

```csharp
public string SecurityPolicyInput { get; }
```

- *Type:* string

---

##### `StackTypeInput`<sup>Optional</sup> <a name="StackTypeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.stackTypeInput"></a>

```csharp
public string StackTypeInput { get; }
```

- *Type:* string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetworkInput"></a>

```csharp
public string SubnetworkInput { get; }
```

- *Type:* string

---

##### `SubnetworkProjectInput`<sup>Optional</sup> <a name="SubnetworkProjectInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetworkProjectInput"></a>

```csharp
public string SubnetworkProjectInput { get; }
```

- *Type:* string

---

##### `InternalIpv6PrefixLength`<sup>Required</sup> <a name="InternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.internalIpv6PrefixLength"></a>

```csharp
public double InternalIpv6PrefixLength { get; }
```

- *Type:* double

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; }
```

- *Type:* string

---

##### `NetworkIp`<sup>Required</sup> <a name="NetworkIp" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.networkIp"></a>

```csharp
public string NetworkIp { get; }
```

- *Type:* string

---

##### `NicType`<sup>Required</sup> <a name="NicType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.nicType"></a>

```csharp
public string NicType { get; }
```

- *Type:* string

---

##### `QueueCount`<sup>Required</sup> <a name="QueueCount" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.queueCount"></a>

```csharp
public double QueueCount { get; }
```

- *Type:* double

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; }
```

- *Type:* string

---

##### `StackType`<sup>Required</sup> <a name="StackType" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.stackType"></a>

```csharp
public string StackType { get; }
```

- *Type:* string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `SubnetworkProject`<sup>Required</sup> <a name="SubnetworkProject" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetworkProject"></a>

```csharp
public string SubnetworkProject { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkInterfaceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceNetworkPerformanceConfigOutputReference <a name="GoogleComputeInstanceNetworkPerformanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceNetworkPerformanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput">TotalEgressBandwidthTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier">TotalEgressBandwidthTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfig">GoogleComputeInstanceNetworkPerformanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TotalEgressBandwidthTierInput`<sup>Optional</sup> <a name="TotalEgressBandwidthTierInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput"></a>

```csharp
public string TotalEgressBandwidthTierInput { get; }
```

- *Type:* string

---

##### `TotalEgressBandwidthTier`<sup>Required</sup> <a name="TotalEgressBandwidthTier" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier"></a>

```csharp
public string TotalEgressBandwidthTier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceNetworkPerformanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceNetworkPerformanceConfig">GoogleComputeInstanceNetworkPerformanceConfig</a>

---


### GoogleComputeInstanceParamsOutputReference <a name="GoogleComputeInstanceParamsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.resetResourceManagerTags"></a>

```csharp
private void ResetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParams">GoogleComputeInstanceParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.property.resourceManagerTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParamsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceParams InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceParams">GoogleComputeInstanceParams</a>

---


### GoogleComputeInstanceReservationAffinityOutputReference <a name="GoogleComputeInstanceReservationAffinityOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceReservationAffinityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.putSpecificReservation">PutSpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.resetSpecificReservation">ResetSpecificReservation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpecificReservation` <a name="PutSpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.putSpecificReservation"></a>

```csharp
private void PutSpecificReservation(GoogleComputeInstanceReservationAffinitySpecificReservation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.putSpecificReservation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation">GoogleComputeInstanceReservationAffinitySpecificReservation</a>

---

##### `ResetSpecificReservation` <a name="ResetSpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.resetSpecificReservation"></a>

```csharp
private void ResetSpecificReservation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.specificReservation">SpecificReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference">GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.specificReservationInput">SpecificReservationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation">GoogleComputeInstanceReservationAffinitySpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity">GoogleComputeInstanceReservationAffinity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpecificReservation`<sup>Required</sup> <a name="SpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.specificReservation"></a>

```csharp
public GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference SpecificReservation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference">GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference</a>

---

##### `SpecificReservationInput`<sup>Optional</sup> <a name="SpecificReservationInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.specificReservationInput"></a>

```csharp
public GoogleComputeInstanceReservationAffinitySpecificReservation SpecificReservationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation">GoogleComputeInstanceReservationAffinitySpecificReservation</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinityOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceReservationAffinity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinity">GoogleComputeInstanceReservationAffinity</a>

---


### GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference <a name="GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation">GoogleComputeInstanceReservationAffinitySpecificReservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceReservationAffinitySpecificReservation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceReservationAffinitySpecificReservation">GoogleComputeInstanceReservationAffinitySpecificReservation</a>

---


### GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference <a name="GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout</a>

---


### GoogleComputeInstanceSchedulingMaxRunDurationOutputReference <a name="GoogleComputeInstanceSchedulingMaxRunDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceSchedulingMaxRunDurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration">GoogleComputeInstanceSchedulingMaxRunDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceSchedulingMaxRunDuration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration">GoogleComputeInstanceSchedulingMaxRunDuration</a>

---


### GoogleComputeInstanceSchedulingNodeAffinitiesList <a name="GoogleComputeInstanceSchedulingNodeAffinitiesList" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceSchedulingNodeAffinitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.get"></a>

```csharp
private GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference <a name="GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference <a name="GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd">ResetDiscardLocalSsd</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiscardLocalSsd` <a name="ResetDiscardLocalSsd" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd"></a>

```csharp
private void ResetDiscardLocalSsd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput">DiscardLocalSsdInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd">DiscardLocalSsd</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopAction">GoogleComputeInstanceSchedulingOnInstanceStopAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiscardLocalSsdInput`<sup>Optional</sup> <a name="DiscardLocalSsdInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput"></a>

```csharp
public object DiscardLocalSsdInput { get; }
```

- *Type:* object

---

##### `DiscardLocalSsd`<sup>Required</sup> <a name="DiscardLocalSsd" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd"></a>

```csharp
public object DiscardLocalSsd { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceSchedulingOnInstanceStopAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopAction">GoogleComputeInstanceSchedulingOnInstanceStopAction</a>

---


### GoogleComputeInstanceSchedulingOutputReference <a name="GoogleComputeInstanceSchedulingOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceSchedulingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putLocalSsdRecoveryTimeout">PutLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putMaxRunDuration">PutMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putNodeAffinities">PutNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putOnInstanceStopAction">PutOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetAutomaticRestart">ResetAutomaticRestart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetHostErrorTimeoutSeconds">ResetHostErrorTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetInstanceTerminationAction">ResetInstanceTerminationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetLocalSsdRecoveryTimeout">ResetLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetMaintenanceInterval">ResetMaintenanceInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetMaxRunDuration">ResetMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetMinNodeCpus">ResetMinNodeCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetNodeAffinities">ResetNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetOnHostMaintenance">ResetOnHostMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetOnInstanceStopAction">ResetOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetPreemptible">ResetPreemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetProvisioningModel">ResetProvisioningModel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocalSsdRecoveryTimeout` <a name="PutLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putLocalSsdRecoveryTimeout"></a>

```csharp
private void PutLocalSsdRecoveryTimeout(GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putLocalSsdRecoveryTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout</a>

---

##### `PutMaxRunDuration` <a name="PutMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putMaxRunDuration"></a>

```csharp
private void PutMaxRunDuration(GoogleComputeInstanceSchedulingMaxRunDuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putMaxRunDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration">GoogleComputeInstanceSchedulingMaxRunDuration</a>

---

##### `PutNodeAffinities` <a name="PutNodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putNodeAffinities"></a>

```csharp
private void PutNodeAffinities(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putNodeAffinities.parameter.value"></a>

- *Type:* object

---

##### `PutOnInstanceStopAction` <a name="PutOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putOnInstanceStopAction"></a>

```csharp
private void PutOnInstanceStopAction(GoogleComputeInstanceSchedulingOnInstanceStopAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.putOnInstanceStopAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopAction">GoogleComputeInstanceSchedulingOnInstanceStopAction</a>

---

##### `ResetAutomaticRestart` <a name="ResetAutomaticRestart" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetAutomaticRestart"></a>

```csharp
private void ResetAutomaticRestart()
```

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetAvailabilityDomain"></a>

```csharp
private void ResetAvailabilityDomain()
```

##### `ResetHostErrorTimeoutSeconds` <a name="ResetHostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetHostErrorTimeoutSeconds"></a>

```csharp
private void ResetHostErrorTimeoutSeconds()
```

##### `ResetInstanceTerminationAction` <a name="ResetInstanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetInstanceTerminationAction"></a>

```csharp
private void ResetInstanceTerminationAction()
```

##### `ResetLocalSsdRecoveryTimeout` <a name="ResetLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetLocalSsdRecoveryTimeout"></a>

```csharp
private void ResetLocalSsdRecoveryTimeout()
```

##### `ResetMaintenanceInterval` <a name="ResetMaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetMaintenanceInterval"></a>

```csharp
private void ResetMaintenanceInterval()
```

##### `ResetMaxRunDuration` <a name="ResetMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetMaxRunDuration"></a>

```csharp
private void ResetMaxRunDuration()
```

##### `ResetMinNodeCpus` <a name="ResetMinNodeCpus" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetMinNodeCpus"></a>

```csharp
private void ResetMinNodeCpus()
```

##### `ResetNodeAffinities` <a name="ResetNodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetNodeAffinities"></a>

```csharp
private void ResetNodeAffinities()
```

##### `ResetOnHostMaintenance` <a name="ResetOnHostMaintenance" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetOnHostMaintenance"></a>

```csharp
private void ResetOnHostMaintenance()
```

##### `ResetOnInstanceStopAction` <a name="ResetOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetOnInstanceStopAction"></a>

```csharp
private void ResetOnInstanceStopAction()
```

##### `ResetPreemptible` <a name="ResetPreemptible" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetPreemptible"></a>

```csharp
private void ResetPreemptible()
```

##### `ResetProvisioningModel` <a name="ResetProvisioningModel" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.resetProvisioningModel"></a>

```csharp
private void ResetProvisioningModel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.localSsdRecoveryTimeout">LocalSsdRecoveryTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference">GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.maxRunDuration">MaxRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference">GoogleComputeInstanceSchedulingMaxRunDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.nodeAffinities">NodeAffinities</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList">GoogleComputeInstanceSchedulingNodeAffinitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.onInstanceStopAction">OnInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference">GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.automaticRestartInput">AutomaticRestartInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.hostErrorTimeoutSecondsInput">HostErrorTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.instanceTerminationActionInput">InstanceTerminationActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.localSsdRecoveryTimeoutInput">LocalSsdRecoveryTimeoutInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.maintenanceIntervalInput">MaintenanceIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.maxRunDurationInput">MaxRunDurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration">GoogleComputeInstanceSchedulingMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.minNodeCpusInput">MinNodeCpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.nodeAffinitiesInput">NodeAffinitiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.onHostMaintenanceInput">OnHostMaintenanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.onInstanceStopActionInput">OnInstanceStopActionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopAction">GoogleComputeInstanceSchedulingOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.preemptibleInput">PreemptibleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.provisioningModelInput">ProvisioningModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.automaticRestart">AutomaticRestart</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.hostErrorTimeoutSeconds">HostErrorTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.instanceTerminationAction">InstanceTerminationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.maintenanceInterval">MaintenanceInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.minNodeCpus">MinNodeCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.onHostMaintenance">OnHostMaintenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.preemptible">Preemptible</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.provisioningModel">ProvisioningModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling">GoogleComputeInstanceScheduling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalSsdRecoveryTimeout`<sup>Required</sup> <a name="LocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.localSsdRecoveryTimeout"></a>

```csharp
public GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference LocalSsdRecoveryTimeout { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference">GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference</a>

---

##### `MaxRunDuration`<sup>Required</sup> <a name="MaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.maxRunDuration"></a>

```csharp
public GoogleComputeInstanceSchedulingMaxRunDurationOutputReference MaxRunDuration { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDurationOutputReference">GoogleComputeInstanceSchedulingMaxRunDurationOutputReference</a>

---

##### `NodeAffinities`<sup>Required</sup> <a name="NodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.nodeAffinities"></a>

```csharp
public GoogleComputeInstanceSchedulingNodeAffinitiesList NodeAffinities { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingNodeAffinitiesList">GoogleComputeInstanceSchedulingNodeAffinitiesList</a>

---

##### `OnInstanceStopAction`<sup>Required</sup> <a name="OnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.onInstanceStopAction"></a>

```csharp
public GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference OnInstanceStopAction { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference">GoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference</a>

---

##### `AutomaticRestartInput`<sup>Optional</sup> <a name="AutomaticRestartInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.automaticRestartInput"></a>

```csharp
public object AutomaticRestartInput { get; }
```

- *Type:* object

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.availabilityDomainInput"></a>

```csharp
public double AvailabilityDomainInput { get; }
```

- *Type:* double

---

##### `HostErrorTimeoutSecondsInput`<sup>Optional</sup> <a name="HostErrorTimeoutSecondsInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.hostErrorTimeoutSecondsInput"></a>

```csharp
public double HostErrorTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `InstanceTerminationActionInput`<sup>Optional</sup> <a name="InstanceTerminationActionInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.instanceTerminationActionInput"></a>

```csharp
public string InstanceTerminationActionInput { get; }
```

- *Type:* string

---

##### `LocalSsdRecoveryTimeoutInput`<sup>Optional</sup> <a name="LocalSsdRecoveryTimeoutInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.localSsdRecoveryTimeoutInput"></a>

```csharp
public GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout LocalSsdRecoveryTimeoutInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout</a>

---

##### `MaintenanceIntervalInput`<sup>Optional</sup> <a name="MaintenanceIntervalInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.maintenanceIntervalInput"></a>

```csharp
public string MaintenanceIntervalInput { get; }
```

- *Type:* string

---

##### `MaxRunDurationInput`<sup>Optional</sup> <a name="MaxRunDurationInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.maxRunDurationInput"></a>

```csharp
public GoogleComputeInstanceSchedulingMaxRunDuration MaxRunDurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingMaxRunDuration">GoogleComputeInstanceSchedulingMaxRunDuration</a>

---

##### `MinNodeCpusInput`<sup>Optional</sup> <a name="MinNodeCpusInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.minNodeCpusInput"></a>

```csharp
public double MinNodeCpusInput { get; }
```

- *Type:* double

---

##### `NodeAffinitiesInput`<sup>Optional</sup> <a name="NodeAffinitiesInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.nodeAffinitiesInput"></a>

```csharp
public object NodeAffinitiesInput { get; }
```

- *Type:* object

---

##### `OnHostMaintenanceInput`<sup>Optional</sup> <a name="OnHostMaintenanceInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.onHostMaintenanceInput"></a>

```csharp
public string OnHostMaintenanceInput { get; }
```

- *Type:* string

---

##### `OnInstanceStopActionInput`<sup>Optional</sup> <a name="OnInstanceStopActionInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.onInstanceStopActionInput"></a>

```csharp
public GoogleComputeInstanceSchedulingOnInstanceStopAction OnInstanceStopActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOnInstanceStopAction">GoogleComputeInstanceSchedulingOnInstanceStopAction</a>

---

##### `PreemptibleInput`<sup>Optional</sup> <a name="PreemptibleInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.preemptibleInput"></a>

```csharp
public object PreemptibleInput { get; }
```

- *Type:* object

---

##### `ProvisioningModelInput`<sup>Optional</sup> <a name="ProvisioningModelInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.provisioningModelInput"></a>

```csharp
public string ProvisioningModelInput { get; }
```

- *Type:* string

---

##### `AutomaticRestart`<sup>Required</sup> <a name="AutomaticRestart" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.automaticRestart"></a>

```csharp
public object AutomaticRestart { get; }
```

- *Type:* object

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.availabilityDomain"></a>

```csharp
public double AvailabilityDomain { get; }
```

- *Type:* double

---

##### `HostErrorTimeoutSeconds`<sup>Required</sup> <a name="HostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.hostErrorTimeoutSeconds"></a>

```csharp
public double HostErrorTimeoutSeconds { get; }
```

- *Type:* double

---

##### `InstanceTerminationAction`<sup>Required</sup> <a name="InstanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.instanceTerminationAction"></a>

```csharp
public string InstanceTerminationAction { get; }
```

- *Type:* string

---

##### `MaintenanceInterval`<sup>Required</sup> <a name="MaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.maintenanceInterval"></a>

```csharp
public string MaintenanceInterval { get; }
```

- *Type:* string

---

##### `MinNodeCpus`<sup>Required</sup> <a name="MinNodeCpus" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.minNodeCpus"></a>

```csharp
public double MinNodeCpus { get; }
```

- *Type:* double

---

##### `OnHostMaintenance`<sup>Required</sup> <a name="OnHostMaintenance" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.onHostMaintenance"></a>

```csharp
public string OnHostMaintenance { get; }
```

- *Type:* string

---

##### `Preemptible`<sup>Required</sup> <a name="Preemptible" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.preemptible"></a>

```csharp
public object Preemptible { get; }
```

- *Type:* object

---

##### `ProvisioningModel`<sup>Required</sup> <a name="ProvisioningModel" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.provisioningModel"></a>

```csharp
public string ProvisioningModel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceSchedulingOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceScheduling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScheduling">GoogleComputeInstanceScheduling</a>

---


### GoogleComputeInstanceScratchDiskList <a name="GoogleComputeInstanceScratchDiskList" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceScratchDiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.get"></a>

```csharp
private GoogleComputeInstanceScratchDiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceScratchDiskOutputReference <a name="GoogleComputeInstanceScratchDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceScratchDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.resetSize">ResetSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.resetDeviceName"></a>

```csharp
private void ResetDeviceName()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.resetSize"></a>

```csharp
private void ResetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.interfaceInput">InterfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.interface">Interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.interfaceInput"></a>

```csharp
public string InterfaceInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.interface"></a>

```csharp
public string Interface { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceScratchDiskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceServiceAccountOutputReference <a name="GoogleComputeInstanceServiceAccountOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceServiceAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount">GoogleComputeInstanceServiceAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccountOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceServiceAccount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceServiceAccount">GoogleComputeInstanceServiceAccount</a>

---


### GoogleComputeInstanceShieldedInstanceConfigOutputReference <a name="GoogleComputeInstanceShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceShieldedInstanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">ResetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot">ResetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm">ResetEnableVtpm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableIntegrityMonitoring` <a name="ResetEnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```csharp
private void ResetEnableIntegrityMonitoring()
```

##### `ResetEnableSecureBoot` <a name="ResetEnableSecureBoot" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```csharp
private void ResetEnableSecureBoot()
```

##### `ResetEnableVtpm` <a name="ResetEnableVtpm" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```csharp
private void ResetEnableVtpm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">EnableIntegrityMonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput">EnableSecureBootInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput">EnableVtpmInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableVtpm">EnableVtpm</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig">GoogleComputeInstanceShieldedInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableIntegrityMonitoringInput`<sup>Optional</sup> <a name="EnableIntegrityMonitoringInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```csharp
public object EnableIntegrityMonitoringInput { get; }
```

- *Type:* object

---

##### `EnableSecureBootInput`<sup>Optional</sup> <a name="EnableSecureBootInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```csharp
public object EnableSecureBootInput { get; }
```

- *Type:* object

---

##### `EnableVtpmInput`<sup>Optional</sup> <a name="EnableVtpmInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```csharp
public object EnableVtpmInput { get; }
```

- *Type:* object

---

##### `EnableIntegrityMonitoring`<sup>Required</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```csharp
public object EnableIntegrityMonitoring { get; }
```

- *Type:* object

---

##### `EnableSecureBoot`<sup>Required</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; }
```

- *Type:* object

---

##### `EnableVtpm`<sup>Required</sup> <a name="EnableVtpm" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```csharp
public object EnableVtpm { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceShieldedInstanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceShieldedInstanceConfig">GoogleComputeInstanceShieldedInstanceConfig</a>

---


### GoogleComputeInstanceTimeoutsOutputReference <a name="GoogleComputeInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstance.GoogleComputeInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



